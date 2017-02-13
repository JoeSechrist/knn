import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';
import StorageService from '../../common/services/storage.service';
import DataService from '../../common/services/data.service';
import viewerComponent from './viewer.component';
import ViewerService from './viewer.service';

let viewerModule = angular.module('viewer', [
    ngSanitize,
    ngAnimate,
    StorageService,
    ViewerService
])

.component('viewer', viewerComponent)
  
.name;

export default viewerModule;
