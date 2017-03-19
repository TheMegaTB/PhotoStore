import React from 'react';
import { NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';

const styles = {
    floatingLabelFocusStyle: {
        color: white,
    }
}

export default class Header extends React.Component {
    render() {
        return (

            <Paper className="mainBar" zDepth={5}>
                <TextField
                    hintText="Name"
                    style={{
                        position: 'relative',
                        top: '10px',
                        left: '10px',
                        width: '30%',
                        color: 'white',
                    }}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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

            </Paper>
        );
    }
}