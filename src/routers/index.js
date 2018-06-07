import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../views/Home';
import Search from '../views/Search';
import Recommend from '../views/Recommend';
import New from '../views/New';
import Rank from '../views/Rank';
import RankDetail from '../views/RankDetail';

export default () => (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/recommend" exact component={Recommend}/>
                <Route path="/new" exact component={New}/>
                <Route path="/rank" exact component={Rank}/>
                <Route path="/rank/:rankid" component={RankDetail}/>
            </Switch>
        </Router>
    </div>
);