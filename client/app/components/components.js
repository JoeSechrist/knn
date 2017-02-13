import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Testing from './testing/testing';
import Viewer from './viewer/viewer';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Testing,
  Viewer
])

.name;

export default componentModule;
