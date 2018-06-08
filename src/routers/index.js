import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../views/Home';
import Search from '../views/Search';
import Recommend from '../views/Recommend';
import New from '../views/New';
import Rank from '../views/Rank';
import RankDetail from '../views/RankDetail';
import Artist from '../views/Artist';
import ArtistList from '../views/ArtistList';
import ArtistDetail from '../views/ArtistDetail';

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
                <Route path="/artist" exact component={Artist}/>
                <Route path="/artist/list/:classid" component={ArtistList}/>
                <Route path="/artist/detail/:singerid" component={ArtistDetail}/>
            </Switch>
        </Router>
    </div>
);