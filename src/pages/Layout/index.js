import React from 'react';
import Header from './Header';
import './style.less';

export default class Layout extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <div>
                <Header />
                {children}
            </div>
        );
    }
}