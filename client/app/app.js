import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Polyfills from 'fix-ie';
import ngMdIcons from 'angular-material-icons';
import uiBootstrap from 'angular-ui-bootstrap';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngMdIcons,
    uiBootstrap
  ])
  .config(($locationProvider, $compileProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
