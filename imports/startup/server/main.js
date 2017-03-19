console.log("Starting server...");

import '../../api/api.js';
import { Orders } from '../../api/orders';


console.log(Orders.find({}).count());