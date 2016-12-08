import ticketCtrl from './modTickets.controller';

const ticketView = require('./modTickets.html');

const ticketSys = {
    bindings: {
        tickets: '=',
    },
    controller: ticketCtrl,
    template: ticketView,
};

export default ticketSys;
