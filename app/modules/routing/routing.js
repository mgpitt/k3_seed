import angular from 'angular';
import uiRouter from 'angular-ui-router';

function routing($urlRouterProvider, $stateProvider) {
    console.log('routing');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                nav: {
                    template: require('../../states/app/nav.html'),
                },
                main: {
                    template: require('../../states/app/app.html'),
                    controller: 'appCtrl',
                    controllerAs: 'vm',
                },
            },

        })
        .state('app.dash', {
            url: '/',
            template: require('../../states/app.dash/state.dash.html'),
            controller: 'appDashCtrl',
            controllerAs: 'vm',
        }).state('app.other', {
            url: '/other',
            template: 'other',
        })
        .state('app.support', {
            url: '/support',
            template: require('../../states/app.support/tickets/tickets.html'),
            controller: 'appSupportTicketsCtrl',
            controllerAs: 'vm',
        });
}

routing.$inject = ['$urlRouterProvider', '$stateProvider'];

export default angular.module('k3.routing', [uiRouter]).config(routing).name;