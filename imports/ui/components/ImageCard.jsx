import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {FlatButton} from 'material-ui';


export default class ImageCard extends React.Component {
    render() {
        const id = this.props.id;
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}
                >
                    <img src="https://unsplash.it/1920/1080/?random"/>
                </CardMedia>
                <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        );
    }
}

export default ImageCard;
