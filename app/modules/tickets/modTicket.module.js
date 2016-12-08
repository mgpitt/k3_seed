import angular from 'angular';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-ui-grid';
import ticketSvc from './modTickets.service';
import ticketCtrl from './modTickets.controller';
import ticketComp from './modTickets.component';

export default angular.module('k3Tickets', ['ui.grid', ngResource, uiBootstrap]).service('ticketSvc', ticketSvc).controller('ticketCtrl', ticketCtrl).component('supportRequests', ticketComp).name;
