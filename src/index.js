import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Main from './pages/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Todos from './pages/Todos';
import Data from './pages/Data';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Main}/>
            {/* make them children of `App` */}
            <Route path="about(/:article)" component={About}/>
            <Route path="contact" component={Contact}/>
            <Route path="articles" component={Articles}/>
            <Route path="todos" component={Todos}/>
            <Route path="data" component={Data}/>
        </Route>
    </Router>
), document.getElementById('root'));