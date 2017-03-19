import React from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import {FlatButton} from 'material-ui';
import {cyan500} from 'material-ui/styles/colors';


export default class ImageCard extends React.Component {
    constructor(args) {
        super(args);

        this.state = {
            digital: false,
            analog: false
        };

        this.toggleDigital = this.toggleDigital.bind(this);
        this.toggleAnalog = this.toggleAnalog.bind(this);
    }

    toggleDigital() {
        this.setState({digital: !this.state.digital});
    }

    toggleAnalog() {
        this.setState({analog: !this.state.analog});
    }

    render() {
        const id = this.props.imageID;

        return (
            <Card>
                <CardHeader
                    title={"Image #" + id}
                />
                <CardMedia>
                    <img src="https://unsplash.it/1920/1080/?random"/>
                </CardMedia>
                <CardActions className="row">
                    <FlatButton
                        className="one-half column"
                        label="Digital"
                        onClick={this.toggleDigital}
                        backgroundColor={this.state.digital ? cyan500 : undefined}/>
                    <FlatButton
                        className="one-half column"
                        label="Abzug"
                        onClick={this.toggleAnalog}
                        backgroundColor={this.state.analog ? cyan500 : undefined}/>
                </CardActions>
            </Card>
        );
    }
}

export default ImageCard;
