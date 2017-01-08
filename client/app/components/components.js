import angular from 'angular';
import Home from './home/home';
import Menuu from './menu/menu';
import Poster from './poster/poster';
import Gallery from './gallery/gallery';
import FooterComponent from './footerComponent/footerComponent';

let componentModule = angular.module('app.components', [
  Home,
  Poster,
  Menuu,
  Gallery,
  FooterComponent,
])

.name;

export default componentModule;
