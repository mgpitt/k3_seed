import angular from 'angular';
import dashCtrl from './dash.controller';
import dashBoard from './dash.component';

export default angular.module('k3Dash', []).component('dashBoard', dashBoard).controller('dashCtrl', dashCtrl).name;
