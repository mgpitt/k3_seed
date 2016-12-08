import angular from 'angular';

const configOptions = {
    development: {
        debug: true,
        apiUrl: 'test',
    },
};
const k3Config = configOptions.development;

export default angular.module('k3.config', []).constant('k3Config', k3Config);
