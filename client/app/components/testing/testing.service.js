import angular from 'angular';
import kdbush from 'kdbush';
import rbush from 'rbush';
import knn from 'rbush-knn';
import distance from 'turf-distance';
import async from 'async';

let testingModule = angular.module('TestingService', [])

    .factory('TestingService', testingService).name;

function testingService($q, StorageService, DataService, ViewerService) {
    'ngInject';

    let service = {
        iterateTestData: iterateTestData,
        prepareData: prepareData,
        findNeighbors: findNeighbors,
        getData: getData
    };
    return service;

    function getData() {
        let deferred = $q.defer();
        let promises = [];
        promises.push(DataService.getTestData());
        promises.push(DataService.getQueryData());
        $q.all(promises).then(data => {
            StorageService.td = data[0].data;
            StorageService.qd = data[1].data;
            deferred.resolve();
            iterateTestData();
        });
        return deferred.promise;
    }

    function iterateTestData() {
        let deferred = $q.defer();
        let promises = [];
        promises.push(prepareData(StorageService.td, StorageService.preparedTD));
        promises.push(prepareData(StorageService.qd, StorageService.preparedQD));
        $q.all(promises).then(function () {
            console.log('Processed: ', StorageService.preparedTD, ' test locations');
            console.log('Processed: ', StorageService.preparedQD, ' query locations');
            findNeighbors().then(() => {
                console.log('StorageService.neighbors: ', StorageService.neighbors);
                // ViewerService.populateMap(StorageService.neighbors);
            });
        });
    }

    function prepareData(data, dst) {
        var deferred = $q.defer();
        let workerCount = Math.ceil(data.length / 50000);
        let workersFinished = 0;
        while (data.length) {
            let worker = new Worker('./prepare.worker.js');
            let inputAB = new Float32Array(data.splice(0, 50000)).buffer;
            worker.postMessage(inputAB, [inputAB]);
            worker.onmessage = (evt) => {
                let outputData = evt.data;
                DataService.asyncEach(outputData, entry => {
                    dst.push(entry);
                }, () => {
                    workersFinished++;
                    worker.terminate();
                    if (workersFinished === workerCount) {
                        deferred.resolve();
                    }
                }, 100);
            };
        }
        return deferred.promise;
    }

    function findNeighbors() {
        console.log('starting findNeighbors');
        var deferred = $q.defer();
        let workerCount = Math.ceil(StorageService.preparedQD.length / 50000);
        let workersFinished = 0;
        if (StorageService.preparedQD.length) {
            createWorker();
        } else {
            deferred.resolve();
        }
        function createWorker() {
            let worker = new Worker('./neighbors.worker.js');
            worker.postMessage({
                testData: StorageService.preparedTD,
                queryData: StorageService.preparedQD.splice(0, 50000)
            });
            worker.onmessage = (evt) => {
                let outputObj = {};
                let markerObj = {};
                DataService.asyncEach(evt.data, (item, index) => {
                    let typedArray = new Float32Array(item);
                    outputObj[index] = [...typedArray];
                    markerObj[index] = [];
                    while (outputObj[index].length) {
                        markerObj[index].push(outputObj[index].splice(0, 2));
                    }
                }, (obj) => {
                    angular.merge(StorageService.neighbors, markerObj);
                    workersFinished++;
                    worker.terminate();
                    if (workersFinished === workerCount) {
                        deferred.resolve();
                    } else {
                        createWorker();
                    }
                }, 1);
            };
        }
        return deferred.promise;
    }
}

export default testingModule;