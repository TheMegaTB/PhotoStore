import React from 'react';
import {ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {white, grey300, cyan500, cyan200} from 'material-ui/styles/colors';
import Done from 'material-ui/svg-icons/action/done'
import AllDone from 'material-ui/svg-icons/action/done-all'

export default class Footer extends React.Component { //TODO: Auto update things on change

    constructor(args) {
        super(args);

        this.state = {
            buy: false
        };

        this.toggleBuy = this.toggleBuy.bind(this);

    }

    toggleBuy() {
        this.setState({buy: !this.state.buy});
    }

    calculateBottom() {
        if (this.state.buy) {
            return 0;
        } else if (Meteor.CLIENT_USER.getTotalPrice() == 0) {
            return -170; //TODO: when calculatePrice is working --> -240
        } else {
            return -170;
        }
    }

    render() {
        return (

            <Paper
                className="mainBar"
                zDepth={5}
                style={{
                    bottom: this.calculateBottom()
                }}
            >
                <div className="bottomBarTopPart">
                    <ToolbarTitle
                        text={"Digital: " + Meteor.CLIENT_USER.countDigital()}
                        style={{
                            float: 'left',
                            position: 'relative',
                            left: '10px',
                            top: '10px',
                            color: 'white',
                            width: 'auto',
                        }}
                    />
                    <ToolbarTitle
                        text={"Abzüge: " + Meteor.CLIENT_USER.countPrint()}
                        style={{
                            float: 'left',
                            position: 'relative',
                            left: '40px',
                            top: '10px',
                            color: 'white',
                            width: 'auto',
                        }}
                    />
                    <ToolbarTitle
                        text={"Preis: " + Meteor.CLIENT_USER.getTotalPrice() + " €"}
                        style={{
                            float: 'right',
                            position: 'relative',
                            right: '10px',
                            text_align: 'right',
                            top: '10px',
                            color: 'white',
                            width: 'auto',
                            visibility: this.state.buy ? 'visible' : 'hidden',
                        }}
                    />
                </div>
                <div className="bottomBarBottomPart">
                    <TextField
                        hintText="Name"
                        style={{
                            position: 'relative',
                            top: '10px',
                            left: '10px',
                            width: '50%',
                            color: 'white',
                        }}
                    />
                    <br/>
                    <TextField
                        hintText="E-Mail"
                        style={{
                            position: 'relative',
                            top: '10px',
                            left: '10px',
                            width: '50%',
                            border: '1px',
                            color: 'white',
                            float: 'top',
                        }}
                    />
                    <br/>
                    <ToolbarTitle
                        text={Meteor.CLIENT_USER.getStatus()} //TODO: automatic update on TextField change
                        style={{
                            float: 'left',
                            position: 'relative',
                            left: '10px',
                            top: '10px',
                            color: 'red',
                            width: '50%',
                        }}
                    />
                </div>
                <FlatButton
                    label={this.state.buy ? "Abschließen" : "Weiter"}
                    labelPosition="before"
                    primary={true}
                    icon={
                        !this.state.buy ? <Done color={cyan200}/> : <AllDone color={white}/>
                    }
                    backgroundColor={this.state.buy ? cyan500 : white}
                    hoverColor={this.state.buy ? cyan200 : grey300}
                    onClick={this.toggleBuy}
                    secondary={this.state.buy}
                    style={{
                        float: 'right',
                        position: 'absolute',
                        bottom: this.state.buy ? 15 : 185,
                        right: '15px',
                        width: 'auto',
                    }}
                    labelStyle={{
                        color: !this.state.buy ? cyan500 : white
                    }}
                />
            </Paper>
        );
    }

}