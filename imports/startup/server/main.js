
console.log("Starting server...");

<<<<<<< HEAD
robots.addLine('User-agent: *');
robots.addLine('Disallow: /');

=======
>>>>>>> 9b47ccc5b80155a7ffe961c0a8dc5f8ccb8f1205
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
<<<<<<< HEAD
});
=======
});
>>>>>>> 9b47ccc5b80155a7ffe961c0a8dc5f8ccb8f1205
