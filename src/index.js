import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/* make them children of `App` */}
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </Route>
    </Router>
), document.getElementById('root'));