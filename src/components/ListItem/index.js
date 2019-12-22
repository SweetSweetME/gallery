import React from 'react';
import propTypes from 'prop-types';

export default class ListItem extends React.Component {
    // 子组件声明自己要使用context
    static contextType = {
        color: propTypes.string
    }

    static propTypes = {
        value: propTypes.string
    }

    render (){
        const { value } = this.props;
        return (
            <div style={{background: this.context.color}}>
                <p>{value}</p>
            </div>
        );
    }
}