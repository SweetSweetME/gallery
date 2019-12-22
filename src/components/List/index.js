import React from 'react';
import propTypes from 'prop-types';
import ListItem from '../ListItem';
export default class List extends React.Component {

    // 父组件声明自己支持context
    static childContextTypes = {
        color: propTypes.string
    }

    static propTypes = {
        list: propTypes.array
    }

    getChildContext = () => {
        return {
            color: 'red'
        }
    }

    render (){
        const { list } = this.props;
        console.log(list);
        return (
            <div>
                <ul>
                    {
                        list.map((entry, index) => 
                            <ListItem key={`list-${index}`} value={entry.text} />
                        )
                    }
                </ul>
            </div>
        );
    }
}