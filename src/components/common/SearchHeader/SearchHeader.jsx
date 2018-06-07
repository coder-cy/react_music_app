import React from 'react';
import { withRouter } from "react-router-dom";

class SearchHeader extends React.Component {
    constructor() {
        super();        
    }

    render() {
        return (
            <header className="search_header_container">
                <div className="search_header_l">
                    <i onClick={() => {window.history.back()}} className="fa fa-chevron-left fa-2x"></i>
                </div>
                <div className="search_header_m">
                    <i className="fa fa-search "></i>
                    <input type="text" className="search_header_search_bar" placeholder="请输入关键字" />
                </div>
                <div className="search_header_r">
                    <div className="search_header_search_btn">搜索</div>
                    {/* <div style={{display: 'none'}} className="search_header_add_to_playlist_btn fa fa-plus-circle fa-2x"></div> */}
                </div>
            </header>
        );
    }

    componentDidMount() {
        
    }    
}

export default withRouter(SearchHeader);