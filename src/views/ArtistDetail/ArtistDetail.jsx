import React from 'react';
import { Link } from 'react-router-dom';
import SongBar from '../../components/common/SongBar';

import TitleHeader from '../../components/common/TitleHeader';

export default class ArtistList extends React.Component {
    constructor() {
        super();
    }

    fetchArtistNameList() {
        this.props.fetchArtistDetailList(this.props.match.params.singerid);
    }

    render() {
        let { artistDetailList } = this.props;

        if(!artistDetailList) return null;
        return (
            <div className="artist_detail_container">
                <TitleHeader title={this.props.location.state.singerName} />
                <ul>
                {
                    artistDetailList.map((song,i) => {
                        return (
                            <SongBar key={i} fileName={song}></SongBar>
                        );
                    })
                }    
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.fetchArtistNameList();
    }
}