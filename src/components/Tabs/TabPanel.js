import React from 'react';

const TabPanel = props => {
    return (
        <div className="comp-tabs-tabpanel">
            {props.children}
        </div>
    )
}

export default TabPanel;