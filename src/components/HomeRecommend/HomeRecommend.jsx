import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import RecommendList from '../common/RecommendList';

export default class HomeRecommend extends React.Component {
    constructor() {
        super();
        this.state = {
            slideOpts: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            }
        }
    }

    fetchSliderImg() {
        this.props.fetchSliderImg();
    }


    render() {
        let { bannerList } = this.props;
        let clientW = document.documentElement.clientWidth;
        return (
            <div className="home_recommend_container">
                <div className="home_recommend_carsoul">
                    <Slider {...this.state.slideOpts}>
                    {
                        bannerList.map((el, i) => {
                            return (
                                <div key={i}>
                                    <img width={clientW} src={el.imgurl} />
                                </div>
                            )
                        })    
                    }
                    </Slider>
                </div>
                <div className="home_recommend_title_bar">
                    <span>推荐歌单</span>
                    <Link to="/recommend">&gt;</Link>
                </div>
                <hr/>
                <RecommendList len="9"/>
            </div>
        )
    }

    componentDidMount() {
        this.fetchSliderImg();
    }
}