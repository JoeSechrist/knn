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
        let workerUrl = '';
        if (window.location.href.split('github').length > 1) {
            workerUrl = window.location.href + 'dist/prepare.worker.js'
        } else {
            let baseUrl = window.location.href.split('knn')[0];
            workerUrl = baseUrl + 'prepare.worker.js'
        }
        while (data.length) {
            let worker = new Worker(workerUrl);
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
        let workerUrl = '';
        if (window.location.href.split('github').length > 1) {
            workerUrl = window.location.href + 'dist/neighbors.worker.js'
        } else {
            let baseUrl = window.location.href.split('knn')[0];
            workerUrl = baseUrl + 'neighbors.worker.js'
        }  
        if (StorageService.preparedQD.length) {
            createWorker();
        } else {
            deferred.resolve();
        }
        function createWorker() {
            let worker = new Worker(workerUrl);
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