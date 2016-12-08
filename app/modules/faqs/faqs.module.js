import angular from 'angular';
import ngResource from 'angular-resource';
import uiGrid from 'angular-ui-grid';
import faqs from './faqs.component';
import faqModCtrl from './faqsMod.controller';

export default angular.module('k3Faqs', ['ui.grid', ngResource]).controller('faqModCtrl', faqModCtrl).component('faqs', faqs).name;