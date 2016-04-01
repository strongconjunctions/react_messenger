import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


// Layouts
import Layout from './layouts/Layout';

// Components
import Home from './components/Home';
import Messages from './components/Messages';
import Options from './components/Options';



// Parent
ReactDOM.render((
    <Router history={browserHistory}>
        <Route component={Layout}>
            <Route path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/options" component={Options} />
        </Route>
    </Router>
), document.getElementById('app'));