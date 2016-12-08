import dashCtrl from './dash.controller';

const dashBoard = {
    bindings: {
        items: '=',
    },
    controller: dashCtrl,
    template: require('./dash.html'),
};

export default dashBoard;
