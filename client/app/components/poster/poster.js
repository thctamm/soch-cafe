import angular from 'angular';
import uiRouter from 'angular-ui-router';
import posterComponent from './poster.component';

let posterModule = angular.module('poster', [
  uiRouter
])

.component('poster', posterComponent)

.name;

export default posterModule;
