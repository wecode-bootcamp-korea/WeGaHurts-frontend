import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './pages/MainM/Main';
import Login from './pages/LoginM/Login';
import SignUp from './pages/SignUpM/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Signup" component={SignUp} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;