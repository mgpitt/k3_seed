function stateDashCtrl() {
    const vm = this;
    vm.dashItems = [{
        panelTitle: 'Faqs',
        panelClass: 'col-xs-12 col-md-12 col-lg-12',
        component: 'faqs',
        data: [{
            id: 1,
            data: 123
        }, {
            id: 2,
            data: 456
        }]
    }, 
    {
        panelTitle: 'Medium panelClass',
        panelClass: 'col-xs-4 col-md-4 col-lg-4',
        component: 'mailer',
    }, 
    {
        panelTitle: 'Medium panelClass',
        panelClass: 'col-xs-4 col-md-4 col-lg-4',
        text: 'something',
    },{
        panelTitle: 'Medium panelClass',
        panelClass: 'col-xs-4 col-md-4 col-lg-4',
        text: 'something',
    },{
        panelTitle: 'Large panelClass',
        panelClass: 'col-xs-4 col-md-6 col-lg-6',
        text: 'something',
    }, {
        panelTitle: 'xtra large panelClass',
        panelClass: 'col-xs-4 col-md-6 col-lg-6',
        text: 'something',
    }, {
        panelTitle: 'xtra large panelClass',
        panelClass: 'col-xs-4 col-md-6 col-lg-6',
        component: 'burtsgrid',
    }];
    console.log('stateDashCtrl');
}

stateDashCtrl.$inject = ['$scope'];

export default stateDashCtrl;