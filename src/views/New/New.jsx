import React from 'react';

import Header from '../../components/common/Header';
import Nav from '../../components/common/Nav';
import SongBar from '../../components/common/SongBar';

export default class New extends React.Component {

    constructor() {
        super();
    }

    fetchNewSongList() {
        this.props.fetchNewSongList();
    }

    render() {
        let { newSongList } = this.props;

        console.log(this.props)

        return (
            <div className="new_container">
                <Header />
                <Nav />
                <ul>
                {
                    newSongList.map((newSong, i) => {
                        return (
                            <SongBar key={i} fileName={newSong.filename} />
                        )
                    })
                }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.fetchNewSongList();
    }
}