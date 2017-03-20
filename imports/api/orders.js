import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


const name = 'orders';

if (Meteor.isClient) {
    Meteor.subscribe(name);
}

export const Orders = new Mongo.Collection(name);


if (Meteor.isServer) {
    Orders.allow({
        insert() {
            return true;
        }
    });

    Meteor.publish(name, function () {
        console.log(this.userId);
        if (this.userId !== null) {
            return Orders.find({});
        }
    });
}