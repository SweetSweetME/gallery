import React from 'react';
import propTypes from 'prop-types';
import { Button, Tag, Icon } from 'antd';
import './style.less'

export default class Transfer extends React.Component {

    static defaultProps = {
        className: '',
        defaultValue: [],
        minCount: 4,
        maxCount: 4,
        onSubmit: () => { }
    }

    static propTypes = {
        className: propTypes.string,
        defaultValue: propTypes.array,
        items: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
        minCount: propTypes.number,
        maxCount: propTypes.number,
        onSubmit: propTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue
        }
    }

    handleChange = (val, type = 'toggle') => {

        const { state: { value } } = this;
        let newValue = [...value];
        switch (type) {
            case 'toggle':
                newValue = LO.includes(value, val) ? LO.difference(value, [val]) : LO.concat(value, [val]);
                break;
            case 'del':
                newValue = LO.difference(value, [val]);
                break;
            default:
                break;
        }

        this.setState({
            value: newValue
        });

        console.log(val);

    }

    renderChoosed = () => {
        const { props: { items, minCount, maxCount, onSubmit }, state: { value } } = this;
        const isSubmitAvailed = value.length >= minCount && value.length <= maxCount;
        const choosedChildren = LO.map(items, (i, key) => {
            if (LO.includes(value, i.key || key)) {
                // console.log(value, i.key || key);
                return (
                    <Tag
                        closable
                        key={i.key || key}
                        onClose={() => { this.handleChange(i.key || key, 'del') }}
                    >
                        {i.title || i}
                    </Tag>
                )
            }
        });
        return (
            <section className="choosed">
                <div className="header">
                    <div className="title">选择后的</div>
                    <div className="extra">{`${value.length}/${maxCount}`}</div>
                </div>
                <div className="content">
                    {choosedChildren}
                </div>
                <div className="btns">
                    <Button
                        disabled={!isSubmitAvailed}
                        type="primary"
                        size="small"
                        onClick={() => { onSubmit }}
                    >
                        确认
                    </Button>
                </div>
            </section>
        );
    }

    renderOptions = () => {
        const { props: { items }, state: { value } } = this;

        return (
            <section className="choosed">
                <div className="header">
                    <div className="title">可选择：</div>
                </div>
                <div className="content">
                    {LO.map(items, (i, key) => {
                        return (
                            <div
                                key={i.key || key}
                                onClick={() => { this.handleChange(i.key || key, 'toggle') }}
                            >
                                {i.title || i}
                                {LO.includes(value, i.key || key) && <Icon type="check" />}
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }

    render() {
        return (
            <div>
                {this.renderChoosed()}
                {this.renderOptions()}
            </div>
        );
    }
}