
function ticketCtrl($scope, ticketSvc) {
    $scope.ticketGrid = {
        data: $scope.$ctrl.tickets || [],
        columnDefs: [
            {
                name: 'id',
            }, {
                name: 'title',
            }, {
                name: 'problem',
            }, {
                name: 'category',
            }, {
                name: 'assigned',
            }, {
                name: 'closed',
            }, {
                name: 'notes',
            }, {
                name: 'createdBy',
            }, {
                name: 'dateCreated',
                cellFilter: 'date : "medium"',
            }, {
                name: 'dateModified',
                cellFilter: 'date : "medium"',
            }, {
                name: 'owner',
            }, {
                name: 'action',
                cellTemplate: '<div class="ui-grid-cell-contents"><button class="btn  btn-default btn-xs">Action</button></div>',
            },
        ],
    };
    console.log($scope);
}

ticketCtrl.$inject = ['$scope', 'ticketSvc'];

export default ticketCtrl;
