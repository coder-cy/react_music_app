import React from 'react';

export default ({fileName}) => {
    return (
        <li className="song_bar_container clearfloat">
            <span>{fileName}</span>
            <i className="fa fa-heart-o"></i>
        </li>
    );
}