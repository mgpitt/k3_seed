import faqModCtrl from './faqsMod.controller';

const faq = {
    bindings: {
        faqData: '=',
    },
    controller: faqModCtrl,
    controllerAs: 'vm',
    template: require('./faqsMod.html'),
}
export default faq;
