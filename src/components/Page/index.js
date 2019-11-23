import React from 'react';
import Card from '../Card';

export default class Page extends React.Component {

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log('nextProps: ', nextProps);
    // }

    shouldComponentUpdate(nextProps) {
        const { message } = this.props;
        const { message: newMessage } = nextProps;
        const { message: { info } } = nextProps;
        console.log(message);
        console.log(newMessage);
        console.log(info);
        // console.log(nextProps);
        // console.log(this.props);
        // console.log(nextProps);
        // console.log(message === newMessage);

        // console.log(LO.isEqual(message, newMessage));
        return !LO.isEqual(message, newMessage);
        // return !(message === newMessage);
    }

    render() {
        // console.log(this.props.message);
        console.log(`%c子组件被渲染`, 'color: red');
        return (
            <div>
                {this.props.message.info}
                <Card />
            </div>
        );
    }
}