import React from 'react';
import { Link } from 'react-router-dom';

export default class RecommendList extends React.Component {
    constructor() {
        super();
    }

    fetchRecommendList() {
        this.props.fetchRecommendList();
    }

    parseNumber(num) {
        return (num > 10000) ? `${(num/10000).toFixed(2)}万` : num;
    }

    render() {
        let { recommendList, len } = this.props;
        len = len === undefined ? recommendList.length : len;
        return (
            <ul className="recommend_list_container clearfloat">
            {
                recommendList.slice(0, Number(len)).map((recommend, i) => {
                    return (
                        <li key={i}>
                            <Link to="/">
                                <img src={recommend.imgurl.replace(/\{size\}/g,400)} />
                                <div>{recommend.specialname}</div>
                                <span>{this.parseNumber(recommend.playcount)}</span>
                            </Link>
                        </li>
                    );
                })
            }
            </ul>
        )
    }

    componentDidMount() {
        this.fetchRecommendList();
    }

}

