import angular from 'angular';
import ngResource from 'angular-resource';
import 'angular-ui-grid';
import ticketSvc from './modTickets.service';
import ticketCtrl from './modTickets.controller';
import ticketComp from './modTickets.component';

export default angular.module('k3Tickets', ['ui.grid', ngResource]).service('ticketSvc', ticketSvc).controller('ticketCtrl', ticketCtrl).component('supportRequests', ticketComp).name;
