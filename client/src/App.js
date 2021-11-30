import React, { useEffect } from 'react'
import Login from "views/Login.js";
import Register from "views/Register.js";
import Profile from "views/Profile.js";
import User from "views/User.js";
import Dashboard from "views/Dashboard.js";
import Developers from "views/Developers.js";
import Posts from "views/Posts.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar.js";

import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from "utils/setAuthToken";
import { loadUser } from 'actions/auth';
import PrivateRoute from 'Router/PrivateRoute';
import Alert from 'components/Alert';
import { getGithubRepos } from 'actions/profile';



const App = () => {
     if (localStorage.token) {
          setAuthToken(localStorage.token);
     }
     useEffect(() => {
          store.dispatch(loadUser())
          store.dispatch(getGithubRepos('yax-coder'))
     }, [])
     return (
          <Provider store={store}>
                     <Alert />
               <Router>
                    <Navbar transparent />
                    <Route exact path="/" component={Login} />
                    <Switch>
                         <Route exact path="/register" component={Register} />
                         <Route exact path="/login" component={Login} />
                         <Route exact path="/profile" component={Profile} />
                         <Route exact path="/user/:id" component={User} />
                         <PrivateRoute exact path='/dashboard' component={Dashboard} />
                         <Route exact path="/developers" component={Developers} />
                         <PrivateRoute exact path="/posts" component={Posts} />

                    </Switch>

               </Router>
          </Provider>
     )
}

export default App
