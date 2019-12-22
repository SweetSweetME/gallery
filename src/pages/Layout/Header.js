import React from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';
import './style.less';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    NAV = {
        home: {
            title: '主页',
            indexNav: 0
        },
        illustration: {
            title: '插画',
            indexNav: 1
        },
        http: {
            title: 'http协议',
            indexNav: 2
        }
    };

    changeNav = (event) => {
        const index = event.target.getAttribute('index');
        if (event.target.nodeName === 'A') {
            this.setState({
                selectedIndex: +index
            });
        }
    }

    render() {
        const { NAV, state: { selectedIndex } } = this;
        // console.log(selectedIndex);
        return (
            <div className="gallery-header" onClick={this.changeNav}>
                <HashRouter>
                    <Route path="/">
                        {
                            LO.map(NAV, (value, key) => <Link
                                className={selectedIndex === value.indexNav ? 'selected' : ''}
                                to={`/${key}`}
                                index={value.indexNav}
                                key={key}>
                                {value.title}
                            </Link>)
                        }
                    </Route>
                </HashRouter>
            </div>
        );
    }
}