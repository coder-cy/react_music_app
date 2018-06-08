import React from 'react';
import { Link } from 'react-router-dom';

import TitleHeader from '../../components/common/TitleHeader';

export default class ArtistList extends React.Component {
    constructor() {
        super();
    }

    fetchArtistNameData() {
        this.props.fetchArtistNameData(this.props.match.params.classid);
    }

    render() {
        let { artistNameData } = this.props;
        let name = artistNameData.classname;
        let list = artistNameData.singers.list.info;
        if(!list) return null;
        return (
            <div className="artist_list_container">
                <TitleHeader title={name} />
                <ul>
                {
                    list.map((singer,i) => {
                        return (
                            <li key={i}>
                                <Link className="clearfloat" to={`/artist/detail/${singer.singerid}`}>
                                    <img src={singer.imgurl.replace(/\{size\}/g, 400)} />
                                    <p>{singer.singername}</p>
                                    <span>&gt;</span>
                                </Link>
                            </li>
                        );
                    })
                }    
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.fetchArtistNameData();
    }
}