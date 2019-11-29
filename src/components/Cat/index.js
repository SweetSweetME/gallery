import React from 'react';

export default class Cat extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {

        const { name } = this.props;

        return (
            <div>
                {name}
            </div>
        );
    }
}