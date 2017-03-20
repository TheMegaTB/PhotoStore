import './User.js';
import { Orders } from './orders';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor'
import { PhotoOrder } from './photoOrder'



export function placeOrder(order) {
    Orders.insert({
        order
    });
}

export function getOrders() {
    return _.map(Orders.find({}).fetch(), function (order) {
        return new PhotoOrder(false, order.order.username, order.order.email, order.order.photos);
    });
}

const o = getOrders();
for (let a in o) {
    console.log(o[a].getTotalPrice())
}