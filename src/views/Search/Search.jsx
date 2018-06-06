import React from 'react';

import SearchHeader from '../../components/common/SearchHeader';

export default class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="search_container">
                <SearchHeader />
            </div>
        );
    }
}