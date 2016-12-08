function mailerCtrl() {
    const vm = this;

    function sendMail() {
        const who = confirm('who should we send to?');
        alert('you sent mail to :' + who);
    }
    vm.sendMail = sendMail;
}

mailerCtrl.$inject = [];

export default mailerCtrl;
