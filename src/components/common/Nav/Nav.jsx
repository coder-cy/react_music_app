import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            navs: [
                {title: '个性推荐', path: '/'},
                {title: '新歌', path: '/new'},
                {title: '排行榜', path: '/rank'},
                {title: '歌手', path: '/artist'},
            ]
        }
    }

    render() {
        return (
            <nav className="nav_container">
            {
                this.state.navs.map((nav, i) => {
                    return (
                        <Link key={i} to={nav.path}>{nav.title}</Link>
                    )
                })
            }
            </nav>
        );
    }
}