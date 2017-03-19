import { Meteor } from 'meteor/meteor';

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import {FlatButton} from 'material-ui';
import {cyan500, cyan100} from 'material-ui/styles/colors';


export default class ImageCard extends React.Component {
    constructor(args) {
        super(args);

        this.state = {
            digital: Meteor.CLIENT_USER.digitalSelected(this.props.imageID),
            analog: Meteor.CLIENT_USER.printSelected(this.props.imageID)
        };

        this.toggleDigital = this.toggleDigital.bind(this);
        this.toggleAnalog = this.toggleAnalog.bind(this);
    }

    toggleDigital() {
        if (this.state.digital)
            Meteor.CLIENT_USER.removeDigital(this.props.imageID);
        else
            Meteor.CLIENT_USER.addDigital(this.props.imageID);
        this.setState({digital: !this.state.digital});
    }

    toggleAnalog() {
        if (this.state.analog)
            Meteor.CLIENT_USER.removePrint(this.props.imageID);
        else
            Meteor.CLIENT_USER.addPrint(this.props.imageID);
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
                <CardActions style={{whiteSpace: "nowrap"}}>
                    <FlatButton
                        label="Digital"
                        style={{width: "49%"}}
                        onClick={this.toggleDigital}
                        backgroundColor={this.state.digital ? cyan500 : undefined}
                        hoverColor={this.state.digital ? cyan100 : undefined}
                    />
                    <FlatButton
                        label="Abzug"
                        style={{width: "49%"}}
                        onClick={this.toggleAnalog}
                        backgroundColor={this.state.analog ? cyan500 : undefined}
                        hoverColor={this.state.analog ? cyan100 : undefined}
                    />
                </CardActions>
            </Card>
        );
    }
}