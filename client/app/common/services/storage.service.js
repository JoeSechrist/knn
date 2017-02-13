import angular from 'angular';

let storageModule = angular.module('StorageService', [])

    .factory('StorageService', storageService).name;

function storageService() {
    let service = {
        td: [],
        qd: [],
        preparedTD: [],
        preparedQD: [],
        neighbors: {}
    };
    return service;
}

export default storageModule;