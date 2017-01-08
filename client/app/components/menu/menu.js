import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menuComponent from './menu.component';

let menuModule = angular.module('menuu', [
  uiRouter
])

.component('menuu', menuComponent)

.name;

export default menuModule;
