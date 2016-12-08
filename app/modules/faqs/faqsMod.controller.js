function faqsModCtrl() {
    const vm = this;
    vm.faqGrid = {
        data: [{
            id: 1,
            data: 123,
        }, {
            id: 2,
            data: 456,
        }, {
            id: 3,
            data: 678,
        }]
    };
}

faqsModCtrl.$inject = [];

export default faqsModCtrl;