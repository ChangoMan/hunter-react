import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Main from './pages/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Todos from './pages/Todos';
import Data from './pages/Data';
import User from './pages/User';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        {/* make them children of `App` */}
        <Route path="about(/:article)" component={About}/>
        <Route path="contact" component={Contact}/>
        <Route path="articles" component={Articles}/>
        <Route path="todos" component={Todos}/>
        <Route path="data/:repo" component={Data}/>
        <Route path="user/:user" component={User}/>
    </Route>
);

export default routes;