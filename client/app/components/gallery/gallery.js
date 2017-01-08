import angular from 'angular';
import uiRouter from 'angular-ui-router';
import galleryComponent from './gallery.component';

let galleryModule = angular.module('gallery', [
  uiRouter
])

.component('gallery', galleryComponent)

.name;

export default galleryModule;
