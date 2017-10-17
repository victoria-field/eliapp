import React, { Component } from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { browserHistory, Router } from 'react-router';
import routes from './routes.js';
import { browserHistory, BrowserRouter as Router , Route, Switch }  from 'react-router-dom';
import App from './app.jsx'
import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';


// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin()

//
// render((
//   <MuiThemeProvider muiTheme={getMuiTheme()}>
//     <Router history={browserHistory} routes={routes} />
//   </MuiThemeProvider>), document.getElementById('react-app'));

render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory}>
        <Switch>
          <Base>

          <Route path="/" render={() => Auth.isUserAuthenticated()
            ? <DashboardPage/>
            : <HomePage/>
          } />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/logout" render={() => {
              Auth.deauthenticateUser()
              return <Redirect to="/"/>
          } } />
        </Base>
        </Switch>
      </Router>

  </MuiThemeProvider>
), document.getElementById('react-app'))
