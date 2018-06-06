import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../views/Home';
import Search from '../views/Search';
import Recommend from '../views/Recommend';


export default () => (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/recommend" exact component={Recommend}/>
            </Switch>
        </Router>
    </div>
);