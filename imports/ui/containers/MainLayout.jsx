import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import AdminTable from '../components/AdminTable';
import NotFound from '../pages/NotFound.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
          <div>
            <Header />
            <Footer />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path = '/about' component={About} />
                <Route path = '/admin' component={AdminTable}/>
                <Route component={NotFound} />
            </Switch>
          </div>
      </Router>
    );
  }
}
