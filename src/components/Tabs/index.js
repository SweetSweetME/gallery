import React from 'react';

export default class Tabs extends React.Component {

    static defaultProps = {
        tabNum: 3
    }

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    render() {
        const { state: { activeIndex }, props: { wrapClass } } = this;
        const newChildren = React.Children.map(this.props.children, (child, index) => {
            if (child.type) {
                return React.cloneElement(child, {
                    active: activeIndex === index,
                    onTabClick: () => this.setState({
                        activeIndex: index
                    })
                });
            } else {
                return child;
            }
        })
        return (
            <div className={wrapClass}>
                {newChildren}
            </div>
        );
    }
}