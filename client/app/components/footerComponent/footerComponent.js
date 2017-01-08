import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerComponentComponent from './footerComponent.component';

let footerComponentModule = angular.module('footerComponent', [
  uiRouter
])

.component('footerComponent', footerComponentComponent)

.name;

export default footerComponentModule;
