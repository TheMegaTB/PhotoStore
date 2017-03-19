import { Meteor } from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from '../../ui/containers/MainLayout.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

Meteor.startup(() => {
  ReactDOM.render(
      <MuiThemeProvider><MainLayout /></MuiThemeProvider>,
      document.getElementById('app')
  );
});
