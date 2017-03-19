
console.log("Starting server...");

robots.addLine('User-agent: *');
robots.addLine('Disallow: /');

import '../../api/api.js';