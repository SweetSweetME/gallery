import React from 'react';
import TabPanel from './TabPanel';

import './style.less';

const TabBar = props => {
    const { active, onTabClick, children, context } = props;
    const style = {
        color: active ? 'red' : 'green',
        cursor: 'pointer'
    }
    return (
        <div className="tab">
            <span
                className="gallery-tab-tabbar"
                style={style}
                onClick={onTabClick}>
                {children}
            </span>
            <TabPanel active={active}>{context}</TabPanel>
        </div >
    );
}

export default TabBar;