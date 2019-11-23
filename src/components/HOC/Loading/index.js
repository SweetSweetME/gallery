import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

export default WrapComp => class extends React.Component {

    static defaultProps = {
        loading: false
    }

    static propTypes = {
        loading: PropTypes.bool
    }

    render() {
        // console.log(this, this.props);
        const { props: { loading } } = this;
        return (
            <Spin spinning={loading}>
                <WrapComp />
            </Spin>
        )
    }
}