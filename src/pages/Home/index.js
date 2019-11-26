import React from 'react';
import { Tabs, TabBar, TabPanel } from 'COMP';

export default class Home extends React.Component {

    renderTabPanel(img) {
        return (
            <TabPanel>
                <article>
                    <h4>插画作品</h4>
                    <img src={require(`./../../images/${img}.jpg`)} />
                </article>
            </TabPanel>
        );
    }

    render() {
        return (
            <Tabs>
                <TabBar panelContext={this.renderTabPanel(1)}>
                    旅游
                </TabBar>
                <TabBar panelContext={this.renderTabPanel(2)}>
                    插画
                </TabBar>
                <TabBar panelContext={this.renderTabPanel(3)}>
                    婚纱
                </TabBar>
            </Tabs>
        );
    }
} 