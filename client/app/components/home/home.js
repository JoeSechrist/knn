import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import StorageService from '../../common/services/storage.service';

let homeModule = angular.module('home', [
  uiRouter,
  StorageService
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('home', {
      url: '/knn/',
      component: 'home'
    });
})

.component('home', homeComponent)
  
.name;

export default homeModule;
