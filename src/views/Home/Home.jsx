import React from 'react';

import Header from '../../components/common/Header';
import Nav from '../../components/common/Nav';
import HomeRecommend from '../../components/HomeRecommend';


export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="home_container">
                <Header />
                <Nav />
                <HomeRecommend />
            </div>
        );
    }
}