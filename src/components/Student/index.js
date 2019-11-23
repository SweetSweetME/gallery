import React from 'react';

export default class Student extends React.Component {
    static sayHello() {
        console.log('hello from Student'); // eslint-disable-line
    }
    constructor(props) {
        super(props);
        console.log('Student constructor'); // eslint-disable-line
        this.focus = this.focus.bind(this);
    }
    componentWillMount() {
        console.log('Student componentWillMount'); // eslint-disable-line
        this.setState({
            name: this.props.name,
            age: this.props.age,
        });
    }
    componentDidMount() {
        console.log('Student componentDidMount'); // eslint-disable-line
    }
    componentWillReceiveProps(nextProps) {
        console.log('Student componentWillReceiveProps'); // eslint-disable-line
        console.log(nextProps); // eslint-disable-line
    }
    focus() {
        this.inputElement.focus();
    }
    render() {
        return (<div>
            <p>姓名：{this.state.name}</p>
            <p>
                年龄:
                <input
                    value={this.state.age}
                    ref={(input) => {
                        this.inputElement = input;
                    }}
                />
            </p>
            <p>
                <input
                    type="button"
                    value="focus input"
                    onClick={this.focus}
                />
            </p>
        </div>);
    }
}