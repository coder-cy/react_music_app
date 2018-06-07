import React from 'react';

import RecommendList from '../../components/common/RecommendList';
import TitleHeader from '../../components/common/TitleHeader';

export default class HomeRecommend extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="recommend_container">
                <TitleHeader title="精选推荐" />
                <RecommendList />
            </div>
        )
    }

    componentDidMount() {

    }
}