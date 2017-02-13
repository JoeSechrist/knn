import angular from 'angular';
import turf from 'turf';
import FileSaver from 'file-saver';

let dataModule = angular.module('DataService', [])

    .factory('DataService', dataService).name;

function dataService(StorageService, $http, $q) {
    'ngInject';

    let service = {
        generateTestData: generateTestData,
        getTestData: getTestData,
        generateQueryData: generateQueryData,
        getQueryData: getQueryData,
        asyncEach: asyncEach,
        // ab2str: ab2str,
        // str2ab: str2ab
    };

    return service;

    // function ab2str(buf) {
    //     return String.fromCharCode.apply(null, new Uint16Array(buf));
    // }

    // function str2ab(str) {
    //     var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    //     var bufView = new Uint16Array(buf);
    //     for (var i = 0, strLen = str.length; i < strLen; i++) {
    //         bufView[i] = str.charCodeAt(i);
    //     }
    //     return buf;
    // }

    // function asyncParse(string) {
    //     return (new Response(string)).json();
    // }

    function asyncEach(obj, iterationFn, callbackFn, chunk) {
        chunk = chunk || 1;
        if (obj) {
            if (Object.keys(obj).length) {
                runObj();
            } else {
                console.error(obj, ' is empty');
            }
        } else {
            console.error('First parameter must be an array or object.');
        }

        function runObj() {
            let iteratee = Object.keys(obj);
            let max = iteratee.length;
            let index = 0;
            setTimeout(() => {
                run(iteratee, index, max);
            }, 0);
        }

        function run(iteratee, index, max) {
            let startTime = new Date();
            let done = false;
            while ((Number(new Date() - Number(startTime) < chunk))) {
                if (obj.hasOwnProperty([iteratee[index]])) {
                    iterationFn.apply(this, [obj[iteratee[index]], iteratee[index]]);
                } else {
                    break;
                }
                index++;
            }
            if (index < max) {
                setTimeout(() => {
                    run(iteratee, index, max);
                }, 0);
            } else if (index >= max) {
                callbackFn.apply(this, [obj]);
            }
        }
    };

    function getTestData() {
        let deferred = $q.defer();
        $http({
            method: 'GET',
            url: './testData.txt'
        }).then(function (response) {
            deferred.resolve(response);
        }, function (response) {
            console.log('failure: ', response);
        });
        return deferred.promise;
    }

    function getQueryData() {
        let deferred = $q.defer();
        $http({
            method: 'GET',
            url: './queryData.txt'
        }).then(function (response) {
            deferred.resolve(response);
        }, function (response) {
            console.log('failure: ', response);
        });
        return deferred.promise;
    }

    function generateTestData() {
        let index = 0;
        while (index !== 200000) {
            let minX = Math.ceil(-70);
            let maxX = Math.floor(40);
            let minY = Math.ceil(-60);
            let maxY = Math.floor(60);
            let randomX = Math.random() * (maxX - minX) + minX;
            let randomY = Math.random() * (maxY - minY) + minY;
            StorageService.td.push([randomX, randomY]);
            index++;
        }
    }

    function generateQueryData() {
        let index = 0;
        while (index !== 200000) {
            let minX = Math.ceil(-70);
            let maxX = Math.floor(40);
            let minY = Math.ceil(-60);
            let maxY = Math.floor(60);
            let randomX = Math.random() * (maxX - minX) + minX;
            let randomY = Math.random() * (maxY - minY) + minY;
            StorageService.qd.push([randomX, randomY]);
            index++;
        }
    }
}

export default dataModule;