import React from 'react';
import { Tabs, TabBar, TabPanel, DataProvider, Cat, Card, ChainReaction, Transfer } from 'COMP';
import Http from './../../fetch';
import Store from './../reducer';
import * as actions from './state/action';
import SMZQ from './smzq';
import { Select, } from 'antd';
import selectOptions from './config';

export default class Home extends React.Component {




    constructor(props) {
        super(props);

        this.state = {
            articleInfo: [],
            showDetail: {},
            getDom: true,
            selectOptions
        }
    }

    componentDidMount() {
        this.getInfo();
        Store.unsub && Store.unsub();
        Store.unsub = Store.subscribe(() => { this.renderHP(Store.getState()) });
        this.renderHP(Store.getState())
        // console.log(Store.getState());

        const { Option } = Select;


        // this.children = [];
        // this.selectOptions = []
        // for (let i = 10; i < 36; i++) {
        //     this.selectOptions.push(i.toString(36) + i);
        //     this.children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        // }

        // promise场景问题:
        const p1 = Promise.resolve('第一个promise');
        const p2 = 2;
        const p3 = new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000, 3);
        });
        const p4 = new Promise(function (resolve, reject) {
            setTimeout(reject, 3000, 4);
        });
        const p5 = new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000, 3);
        });

        Promise.all([p1, p2, p3, p4, p5]).then(function (value) {
            console.log(`%c${value}`, 'color: green');
        }).catch(function (error) {
            console.log(error);
        });

        // https://jsonplaceholder.typicode.com/users
        let dataArr = [];
        for (let i = 0; i < 200; i++) {
            dataArr.push(i);
        }
        let url = 'https://jsonplaceholder.typicode.com/users';
        console.log(dataArr);
        let httpArr = [];
        let start = 0;
        for (let i = start; i < start + 10; i++) {
            let data = dataArr.slice(i * 10, (i + 1) * 10);
            httpArr.push(myHttp(url, data));
        }

        Promise.all(httpArr).then(() => {
            httpArr = []
            start += 10;
            // setTimeout(() => { httpArr }, 1000);
        });

        function myHttp(url, data) {
            fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }

    }

    getDetail = () => {
        Http.get('https://jsonplaceholder.typicode.com/users')
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
        Http.get('https://jsonplaceholder.typicode.com/users')
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



    handleChange = (value) => {
        console.log(`selected ${value}`);
        // const { state: { selectOptions } } = this;
        // console.log('剩下的：', LO.difference(selectOptions, value));
        this.setState({
            selectOptions: LO.difference(selectOptions, value)
        });
    }

    getDom() {
        const { state: { getDom } } = this;
        switch (getDom) {
            case true:
                return <iframe src="https://www.zcool.com.cn/discover/0!0!0!0!0!!!!-1!0!1"></iframe>;
            case false:
                return <div>切换后的真实DOM</div>
        }
    }

    changeClick = () => {
        this.setState((state) => ({
            getDom: !state.getDom
        }));
    }

    render() {
        const { state: { articleInfo, selectOptions } } = this;
        console.log(selectOptions);




        return (
            <div>
                <Transfer
                    items={['12', '13', '14', '15', '16', '17']}
                    defaultValue={[1, 3, 5]}
                />

                <ChainReaction />
                {
                    // <Card>
                    //     <div>真实dom</div>
                    //     {this.getDom()}
                    // </Card>
                }
                <button onClick={this.changeClick}>切换</button>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder='Please select'
                    defaultValue={['a10', 'c12']}
                    onChange={this.handleChange}
                    tokenSeparators={[',']}
                >
                    {LO.map(selectOptions, (selectOption) => <Select.Option key={selectOption}>{selectOption}</Select.Option>)}
                </Select>
                <div>
                    {LO.reduce(selectOptions, (result, value) => result + ',' + value, '')}
                </div>
                {selectOptions}

                {
                    // <DataProvider>
                    //     {(data) => <Cat name={data.name} />}
                    // </DataProvider>
                }
                {
                    // <DataProvider render1={(data) => <Cat name={data.name} />} />
                }
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
            </div >
        );
    }
} 