import mailerCtrl from './mailer.controller.js';
const mailer = {
    controller: mailerCtrl,
    controllerAs: 'vm',
    template: require('./mailer.html'),
};

export default mailer;
