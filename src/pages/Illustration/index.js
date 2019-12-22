import React from 'react';
import Store from './../reducer';
import * as actions from './state/action';
import { Tabs, Button } from 'antd';
import { Card, List } from 'COMP';
import './style.less';

const { TabPane } = Tabs;

export default class Illustration extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayComp: true
        }
    }

    componentDidMount() {
        Store.unsub && Store.unsub();
        Store.unsub = Store.subscribe(() => { this.renderDiv(Store.getState()) });
        this.renderDiv(Store.getState())
        // console.log(Store.getState());
    }

    renderDiv(myStore) {
        this.renderNumber(myStore);
    }

    renderNumber(myStore) {
        const number = document.getElementById("number");
        number.innerHTML = myStore.counter.number;

    }

    showComponent = () => {
        this.setState({
            displayComp: true
        });
    }

    hideComponent = () => {
        this.setState({
            displayComp: false
        });
    }

    render() {
        const { state: { displayComp } } = this;
        return (
            <div className="illus">
                <div className="left">
                    <h1>插画集💐</h1>
                    <button onClick={() => { actions.add() }}>+</button>
                    <button onClick={() => { actions.dec() }}>-</button>
                    <span id="number"></span>
                    <Tabs>
                        <TabPane tab="item1" key="1">第一个卡片</TabPane>
                        <TabPane tab="item2" key="2">第二个卡片</TabPane>
                    </Tabs>
                </div>
                <div className="right">
                    <List list={[{text: '第一条'}, {text: '第二条'}]} />
                    <Button onClick={()=> { this.showComponent(); }}>点击显示子组件</Button>
                    {
                        displayComp ? (
                            <Card>
                                card
                                <Button onClick={()=>{ this.hideComponent(); }}>点击隐藏子组件【卡片Card】</Button>
                            </Card>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}