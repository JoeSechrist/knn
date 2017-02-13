import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';
import StorageService from '../../common/services/storage.service';
import DataService from '../../common/services/data.service';
import TestingService from './testing.service';
import testingComponent from './testing.component';

let testingModule = angular.module('testing', [
    ngSanitize,
    ngAnimate,
    StorageService,
    DataService,
    TestingService
])

.component('testing', testingComponent)
  
.name;

export default testingModule;
