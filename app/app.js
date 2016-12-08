import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-ui-grid/ui-grid.css';

import 'bootstrap';
import k3Routing from './modules/routing/routing';
import k3Dash from './modules/dash/dash.module';
import appCtrl from './states/app/app.controller';
import appDashCtrl from './states/app.dash/state.dash.controller';
import appSupportTicketsCtrl from './states/app.support/tickets/support.tickets.ctrl';
import k3Faqs from './modules/faqs/faqs.module';
import mailer from './modules/mailer/mailer.module';
import tickets from './modules/tickets/modTicket.module';
import './config';
import './css/bs-or.css';
import './css/k3.css';

angular.module('k3', [ngSanitize, k3Routing, k3Dash, k3Faqs, mailer, tickets]).controller('appCtrl', appCtrl).controller('appDashCtrl', appDashCtrl).controller('appSupportTicketsCtrl', appSupportTicketsCtrl);
