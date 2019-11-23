import React from 'react';

const TabPanel = props => {
    return (
        <div className="tab-panel" style={{ display: props.active ? 'block' : 'none' }}>
            {props.children}
        </div>
    )
}

export default TabPanel;