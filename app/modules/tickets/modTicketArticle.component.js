import articleCtrl from './modTicketArticle.controller';

const articleTemplate = require('./modTicketArticle.html');

const ticketArticle = {
    bindings: {
        article: '=',
    },
    template: articleTemplate,
    controller: articleCtrl,
};

export default ticketArticle;
