import React from 'react';
import './style.less';

export default class Example extends React.Component {
    // constructor() {
    state = {
        count: 0
    }
    // }

    componentWillMount() {
        alert($);


        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            });
            this.setState({
                count: this.state.count + 7
            });
            this.setState({
                count: this.state.count + 1
            });
            //     this.setState({
            //         count: this.state.count + 1
            //     });
        }, 0)
        new Promise((resolve, reject) => {
            console.log('开始执行promise');
            setTimeout(() => { resolve('请求成功！') }, 0);
            console.log('定时器');
            this.setState({
                count: this.state.count + 1
            });
            this.setState({
                count: this.state.count + 1
            });
        }).then((res) => {
            console.log(res);
            this.setState({
                count: this.state.count + 1
            });
            this.setState({
                count: this.state.count + 1
            });
        });

        // this.setState((state) => ({
        //     count: state.count + 1
        // }));
        // this.setState((state) => ({
        //     count: state.count + 1
        // }));
    }

    componentDidMount() {
        // setTimeout(() => {
        // this.setState({
        //     count: this.state.count + 1
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
        // }, 0)
        this.btn.addEventListener('click', () => {
            this.onClick('原生事件修改state');
        }, false);

        new MutationObserver(_ => {
            console.log('observer');
        }).observe(this.outer, {
            attributes: true
        })

        this.outer.addEventListener('click', this.handler);
        this.inner.addEventListener('click', this.handler);
    }

    onClick = (info) => {
        console.log(info);
        // this.setState({
        //     count: this.state.count + 1
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
        this.setState({
            count: this.state.count + 3
        });
        this.setState((state) => ({
            count: state.count + 3
        }));
        this.setState((state) => ({
            count: state.count + 3
        }));

        this.setState((state) => ({
            count: state.count + 3
        }));
        this.setState({
            count: this.state.count + 1
        });
        // this.setState({
        //     count: this.state.count + 1
        // });
        // this.setState({
        //     count: this.state.count + 3
        // });
        // this.setState((state) => ({
        //     count: state.count + 1
        // }));
        // this.setState((state) => ({
        //     count: state.count + 1
        // }));
    }

    handler = () => {
        console.log('click*****');
        Promise.resolve().then(_ => console.log('promise')) // 注册微任务
        setTimeout(_ => console.log('timeout')) // 注册宏任务
        requestAnimationFrame(_ => console.log('animationFrame')); // 注册宏任务
        this.outer.setAttribute('data-random', Math.random()); // DOM属性修改，触发微任务
    }




    render() {
        console.log('rendered count:', this.state.count);
        return (
            <div>
                <div className="shape"></div>
                <div className="box">
                    <div className="ball"></div>
                </div>

                <h1>组件测试页面📃</h1>
                <button ref={btn => { this.btn = btn; }} onClick={() => { this.onClick('React事件') }}>原生计时器</button>
                <div style={{ width: '120px', height: '50px', backgroundColor: 'red' }} ref={div => this.outer = div}>
                    <div style={{ width: '80px', height: '50px', backgroundColor: 'blue' }} ref={div => this.inner = div}></div>
                </div>
            </div>
        );
    }
}