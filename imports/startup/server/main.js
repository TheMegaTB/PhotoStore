console.log("Starting server...");

import '../../api/api.js';

const basicAuth = WebAppInternals.NpmModules.connect.module.basicAuth;

WebApp.connectHandlers.stack.splice(0, 0, {
    route: '',
    handle: basicAuth(function(user, pass) {
        return 'mottowoche' == user && 'abi2017' == pass;
    })
});
WebApp.connectHandlers.stack.splice(0, 0, {
    route: '/about',
    handle: basicAuth(function(user, pass) {
        return 'admin' == user && 'supersecret' == pass;
    })
});