function supportTicketsCtrl() {
    const vm = this;
    vm.tickets = [{
        id: 1,
        title: 'test ticket',
        problem: '404 error on certain pages',
        assigned: false,
        closed: false,
        category: 'k3',
        dateCreated: new Date(),
        dateModified: new Date(),
        createdBy: 'mpitt@kmbs.konicaminolta.us',
        modifiedBy: 'mpitt@kmbs.konicaminolta.us',
        owner: 'mpitt@kmbs.konicaminolta.us',
        notes: [],
    }, {
        id: 2,
        title: 'test ticket 2',
        problem: 'reset password',
        assigned: false,
        closed: false,
        category: 'k3',
        dateCreated: new Date(),
        dateModified: new Date(),
        createdBy: 'mpitt@kmbs.konicaminolta.us',
        modifiedBy: 'mpitt@kmbs.konicaminolta.us',
        owner: 'mpitt@kmbs.konicaminolta.us',
        notes: [],
    }];
}

supportTicketsCtrl.$inject = [];

export default supportTicketsCtrl;
