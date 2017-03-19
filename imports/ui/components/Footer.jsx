import React from 'react';
import { NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';
import Euro from 'material-ui/svg-icons/action/euro-symbol'

export default class Header extends React.Component {
    render() {
        return (

            <Paper className="mainBar" zDepth={5}>
                <div className="bottomBarTopPart">
                    <ToolbarTitle
                        text="Digital: ..."
                        style={{
                            float: 'left',
                            position: 'relative',
                            left: '10px',
                            top: '10px',
                            color: 'white',
                            width: '25%',
                        }}
                    />
                    <ToolbarTitle
                        text="Abzug: ..."
                        style={{
                            float: 'left',
                            position: 'relative',
                            left: '10px',
                            top: '10px',
                            color: 'white',
                            width: '25%',
                        }}
                    />
                    <FlatButton
                        label="Bestellen für ..."
                        labelPosition="before"
                        primary={true}
                        icon={<Euro />}
                        backgroundColor={white}
                        hoverColor="lightgrey"
                        style={{
                            float: 'right',
                            position: 'relative',
                            top: '20px',
                            right: '10px',
                            width: '30%',
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
                            width: '30%',
                            color: 'white',
                        }}
                    />
                    <TextField
                        hintText="E-Mail"
                        style={{
                            position: 'relative',
                            top: '10px',
                            left: '30px',
                            width: '30%',
                            border: '1px',
                            color: 'white',
                        }}
                    />
                </div>

            </Paper>
        );
    }
}