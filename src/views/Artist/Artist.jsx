import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/common/Header';
import Nav from '../../components/common/Nav';


export default class Artist extends React.Component {
    constructor() {
        super();
    }

    fetchArtistClassList() {
        this.props.fetchArtistClassList();
    }

    render() {
        let { artistClassList } = this.props;

        return (
            <div className="artist_container">
                <Header />
                <Nav />
                <ul>
                {
                    artistClassList.map((artistClass, i) => {
                        return (
                            <li key={i}>
                                <Link className="clearfloat" to={`/artist/list/${artistClass.classid}`}>    
                                    <img src={artistClass.imgurl} />
                                    <p>{artistClass.classname}</p>
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
        this.fetchArtistClassList();
    }
}