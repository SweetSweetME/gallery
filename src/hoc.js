import React, { Component } from "react";

const withData = (url, params) => WapperedComponent => {
    class WithData extends Component {
        state = {
            data: []
        };
        componentDidMount() {
            fetch(url, { body: JSON.stringify(params) })
                .then(response => response.json())
                .then(data => this.setState({ data }));
        }
        render() {
            return <WapperedComponent {...this.state} {...this.props} />;
        }
    }
    return WithData;
};

export default withData;