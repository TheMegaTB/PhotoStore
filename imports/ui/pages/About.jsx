import React from 'react';
import { Orders } from '../../api/orders';
import { PhotoOrder } from '../../api/api';


export default class About extends React.Component {
    render() {
        function addExampleOrder() {
            const user = new PhotoOrder("Hans Peter2", "hans@ma.il");

            user.changePhotoStatus(1, 2);
            user.changePhotoStatus(1, 0);

            Orders.insert({
                user
            });
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

export default About;
