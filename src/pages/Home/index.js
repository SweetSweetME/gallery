import React from 'react';
import { Tabs, TabBar, TabPanel } from 'COMP';
import Http from './../../fetch';
import Store from './../reducer';
import * as actions from './state/action';
import SMZQ from './smzq';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articleInfo: [],
            showDetail: {}
        }
    }

    componentDidMount() {
        this.getInfo();
        Store.unsub && Store.unsub();
        Store.unsub = Store.subscribe(() => { this.renderHP(Store.getState()) });
        this.renderHP(Store.getState())
        // console.log(Store.getState());

    }

    getDetail = () => {
        Http.get('http://localhost:8091/posts/e7a543ae-fd10-4def-b9a0-4f7ba4a18a86')
            .then((data) => {
                this.setState({
                    showDetail: data
                });
            });
    }

    callback(data) {
        this.setState({
            articleInfo: data
        });
    }

    getInfo = () => {
        Http.get('http://localhost:8091/posts')
            .then(data => {
                this.setState({
                    articleInfo: data
                });
            });

        console.log(document.cookie);
    }

    renderTabPanel(info) {
        const { state: { showDetail } } = this;
        return (
            <TabPanel>
                <article>
                    <h4>{info.title}</h4>
                    <p>{info.body}</p>
                    <button onClick={() => { this.getDetail(info.id) }}>获取详情🔎</button>
                    {!LO.isEmpty(showDetail) && <div className={showDetail ? 'show' : 'hide'}>
                        <h4>{showDetail.title}</h4>
                        <p>{showDetail.body}</p>
                        <img src={showDetail.img} />
                    </div>}
                </article>
            </TabPanel>
        );
    }

    renderH(myState) {
        const h = document.getElementById("h");
        h.style.color = myState.theme.color;
    }

    renderP(myState) {
        const p = document.getElementById("p");
        p.style.color = myState.theme.color;
    }

    renderHP(myState) {
        this.renderH(myState);
        this.renderP(myState);
    }







    // changeColor(action) {
    //     switch (action.type) {
    //         case 'CHANGE_COLOR':
    //             return {
    //                 ...this.myState,
    //                 color: action.color
    //             }
    //         default:
    //             return this.myState;
    //     }
    // }








    // reducer(myState = {}, action) {
    //     return {
    //         theme: this.theme(myState.theme, action),
    //         counter: this.counter(myState.counter, action)
    //     }
    // }

    render() {
        const { state: { articleInfo } } = this;
        return (
            <div>
                {
                    // <SMZQ /> 
                }
                <button onClick={() => { actions.changeRedTheme() }}>红色</button>
                <button onClick={() => { actions.changeBuleTheme() }}>蓝色</button>

                <h1 id="h">标题内容</h1>
                <p id="p">内容明细 --- 修改字体颜色</p>
                <Tabs>
                    {
                        !LO.isEmpty(articleInfo) && LO.map(articleInfo, (value, key) => <TabBar
                            key={key}
                            panelContext={this.renderTabPanel(value)}>
                            {value.title}
                        </TabBar>
                        )
                    }
                </Tabs>
            </div>
        );
    }
} 