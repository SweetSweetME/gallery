import React from 'react';

export default class DataProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '小猫小狗'
        }
    }
    render() {
        return (
            <div>
                {this.props.children(this.state)}
            </div>
        );
    }
}