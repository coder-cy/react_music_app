import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: 0,
            randomList: [20,60,30,50]
        }
        
    }

    random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    handleFocus() {
        this.props.history.push('/search');
    }

    render() {
        return (
            <header className="header_container">
                <div className="header_l">
                    <Link className="header_user_avatar" to="/user/login">
                        <i className="fa fa-user-circle-o fa-2x"></i>
                    </Link>
                </div>
                <div className="header_m">
                    <i className="fa fa-search "></i>
                    <input type="text" onFocus={this.handleFocus.bind(this)} className="header_search_bar" placeholder="请输入关键字" />
                </div>
                <div className="header_r">
                    {
                        this.state.randomList.map((random,i) => {
                            return <span key={i} style={{height: `${random}%`}}></span>
                        })
                    }
                    {/* <div style={{display: 'none'}} className="header_add_to_playlist_btn fa fa-plus-circle fa-2x"></div> */}
                </div>
            </header>
        );
    }

    componentDidMount() {
        // this.state.timer = setInterval(() => {
        //     this.setState({
        //         randomList: [this.random(30,100),this.random(30,100),this.random(30,100),this.random(30,100)]
        //     });
        // }, 200);
    }    
}

export default withRouter(Header);