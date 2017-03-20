import { Meteor } from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from '../../ui/containers/MainLayout.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../../api/api';
import { PhotoOrder } from '../../api/photoOrder';


Meteor.startup(() => {
  Meteor.CLIENT_USER = new PhotoOrder();

  ReactDOM.render(
      <MuiThemeProvider>
          <MainLayout />
      </MuiThemeProvider>,
      document.getElementById('app')
  );
});
