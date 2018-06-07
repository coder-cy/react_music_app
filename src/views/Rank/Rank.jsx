import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/common/Header';
import Nav from '../../components/common/Nav';

export default class Rank extends React.Component {

    constructor() {
        super();
    }

    fetchRankTitleList() {
        this.props.fetchRankTitleList();
    }

    render() {
        let { rankTitleList } = this.props;
        return (
            <div className="rank_container">
                <Header />
                <Nav />
                <ul>
                {
                    rankTitleList.map((rankTitle, i) => {
                        return (
                            <li className="clearfloat" key={i}>
                                <Link to={`/rank/${rankTitle.rankid}`}>
                                    <img src={rankTitle.imgurl.replace(/\{size\}/g, 400)} />
                                    <p>{rankTitle.rankname}</p>
                                    <span>&gt;</span>
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.fetchRankTitleList();
    }
}