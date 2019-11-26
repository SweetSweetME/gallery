import React from 'react';

import './style.less';

const TabBar = props => {
    const { active, onTabClick, children, panelContext } = props;
    const style = {
        color: active ? '#dd2c00' : '#3e2723',
        borderBottom: active ? '1px solid #dd2c00' : '',
        textShadow: active ? '2px 2px 1px #fff' : ''
    }
    return (
        <div className="comp-tabs-tabbar">
            <span
                style={style}
                onClick={onTabClick}>
                {children}
            </span>
            {active && panelContext}
        </div>
    );
}

export default TabBar;