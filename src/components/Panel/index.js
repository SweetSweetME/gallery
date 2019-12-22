import React from 'react';
import './style.less';

export default class Panel extends React.Component {
    static defaultProps = {
        title: '',
        children: ''
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { props: { title, children } } = this;
        return (
            <div className="component-panel">
                <h3>{title}</h3>
                <article>{children}</article>
            </div>
        );
    }
}