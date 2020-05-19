import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Main" component={Main} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;