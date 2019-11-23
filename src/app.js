import React from 'react';
import { ThemeProvider } from './context';
import { Page } from 'COMP';
import { Img } from './img';
import { Student, HOC, Avatar, Tabs, TabBar } from 'COMP';
import EasyHttp from './fetch';
import AA from './aa';
import Decorator from './decorator';
import 'antd/dist/antd.css';
import './style.less';

@HOC.Loading
// @Decorator // 鼠标变👋
export default class Welcome extends React.Component {

    deleteTimer = null;

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            theme: 'red',
            hello: {
                info: '父组件'
            },
            message: {
                a: 'a',
                b: 'b',
                info: 0
            }
        }
    }

    componentDidMount() {
        this.withLogger('--prefix--这里打印的是')(Img)('传入的props');
        // this.withData(
        //     'https://jsonplaceholder.typicode.com/posts',
        //     {
        //         _limit: 10,
        //         page: 2
        //     }
        // )(Img);
        // this.withData('https://jsonplaceholder.typicode.com/photos', '')(Img);
        // console.log('打印');
        // this.getPhotos();
        this.addNum();
    }

    withLogger = (prefix = "") => WrappedComponent => {
        const WithLogger = props => {
            // console.log(`${prefix}[Props]:`, props);
            return <WrappedComponent {...props} />;
        };
        return WithLogger;
    };

    withData = (url, params) => WapperedComponent => {
        class WithData extends React.Component {
            state = {
                data: []
            };
            componentDidMount() {
                fetch(url, { body: JSON.stringify(params) })
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ data });
                        // console.log(data);
                    });
            }
            render() {
                // console.log('data');
                return <WapperedComponent {...this.state} {...this.props} />;
            }
        }
        return WithData;
    };

    getPhotos() {
        EasyHttp.get('https://jsonplaceholder.typicode.com/photos')
            .then(data => {
                this.setState({
                    photos: data.slice(0, 10)
                })
            });
    };

    deleteImg() {
        if (this.deleteTimer) {
            clearTimeout(this.deleteTimer);
        }
        this.deleteTimer = setTimeout(() => {
            EasyHttp.delete('https://jsonplaceholder.typicode.com/photos/2')
                .then((data) => {
                    alert(data);
                })
        }, 1000)
    }

    themeChange(value) {
        this.setState({
            theme: value.target.value
        });
    }

    addNum() {
        // console.log(this);
    }

    changeMessage = () => {
        // const { hello } = this.state;
        // this.setState(({ hello }) => {
        //     return {
        //         hello: { // 新的复制
        //             ...hello,
        //             info: '父组件文案'
        //         }
        //     }
        // });
        this.setState(({ hello, message }) => {  // 函数的第一个参数是 上一个state 第二个参数是 新的props  { hello } 解构赋值
            hello.info = '新的父组件文案';
            return {
                // hello: { ...hello }// 这样赋值产生了新的地址 
                hello,// 原本的hello   应该渲染 却没有渲染 因为地址没变
                // message: {
                //     info: '子组件文案 此时 父组件没有改变state 但是 都渲染了'
                // }
                message: { ...message, info: Math.random() }
                // message
            }
        });
    }

    render() {
        const { state: { photos, theme, message, hello } } = this;
        // console.log(`%c${performance.now()}%cms `, 'color: green', 'color: black');
        // console.log(`%c父组件被渲染`, 'color: green');
        // 提供者提供数据
        return (
            <ThemeProvider value={{ themeColor: theme }}>
                <Tabs wrapClass="gallery-tab">
                    <TabBar type='tab' context='你给我站住！'>
                        tab1 噢😯
                    </TabBar>
                    <TabBar type='tab' context='对就是你'>
                        tab2 哼∮
                    </TabBar>
                    <TabBar type='tab' context='踩我鞋了'>
                        tab3 诶😳
                    </TabBar>
                </Tabs>
                <h1>{hello.info}</h1>
                {Avatar({
                    imgUrl: require('./images/8.jpg'),
                    text: 'once'
                })}
                { //<AA />
                }
                <select onChange={(value) => this.themeChange(value)}>
                    <optgroup>
                        <option value="red">红色</option>
                        <option value="yellow">黄色</option>
                    </optgroup>
                </select>
                <button onClick={() => this.addNum()}>新增数据</button>
                <button onClick={() => this.deleteImg()}>删除数据</button>
                <button onClick={this.changeMessage}>改变父组件内容</button>
                <Page message={message} />
                {
                    LO.isEmpty(photos) ? ''
                        :
                        LO.map(photos, (value) => (
                            <article key={value.id}>
                                <img src={value.url} />
                            </article>
                        ))
                }
            </ThemeProvider>
        )
    }
}
