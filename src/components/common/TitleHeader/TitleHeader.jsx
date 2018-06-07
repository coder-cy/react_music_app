import React from 'react';

export default ({title}) => {
    return (
        <header className="title_header">
            <i className="fa fa-chevron-left fa-2x" onClick={() => {window.history.back()}}></i>
            <span>{title}</span>
        </header>
    );
}
