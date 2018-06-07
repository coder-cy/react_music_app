import React from 'react';
import { Link } from 'react-router-dom';

import TitleHeader from '../../components/common/TitleHeader';
import SongBar from '../../components/common/SongBar';

export default class RankDetail extends React.PureComponent  {

    constructor(props) {
        super(props);
        
        // this.state = {
        //     rankName: ''
        // }
    }

    fetchRankDetailData() {
        this.props.fetchRankDetailData(this.props.match.params.rankid);
    }

    render() {
        let { rankDetailData } = this.props;
        let rankName = rankDetailData.info.rankname;
        let songList = rankDetailData.songs.list;
        if(!rankName || !songList) return null;
        return (
            <div className="rank_detail_container">
                <TitleHeader title={rankName}/>
                <ul>
                {
                    songList.map((song, i) => {
                        return (
                            <SongBar key={i} fileName={song.filename}/>
                        )
                    })
                }   
                </ul>
            </div>
        );
    }

    componentWillMount() {
        this.fetchRankDetailData();
    }

}