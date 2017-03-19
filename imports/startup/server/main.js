
console.log("Starting server...");

robots.addLine('User-agent: *');
robots.addLine('Disallow: /');

import { getOrders } from '../../api/api.js';