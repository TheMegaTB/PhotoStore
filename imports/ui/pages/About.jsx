import React from 'react';
import { PhotoOrder, placeOrder } from '../../api/api';


export default class About extends React.Component {
    render() {
        function addExampleOrder() {
            const order = new PhotoOrder();
            order.changeUsername("Hansi");

            order.addPrint(1);
            order.addDigital(1);

            placeOrder(order);
        }

        return (
            <div className='About'>
                <h1>About</h1>
                <button onClick={addExampleOrder}>Hallo
                </button>
            </div>
        );
    }
}
