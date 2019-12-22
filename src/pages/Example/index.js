import React from 'react';
// import './../../filterCSS';
import './style.less';

export default class Example extends React.Component {
    // constructor() {
    state = {
        count: 0,
        deg: 0
    }
    // }

    componentWillMount() {
        // alert($);


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

<<<<<<< HEAD
    inputSelectChange (){
        console.log(this.searchInput.value);
=======
    animation = () => {
        const { state: { deg } } = this;
        console.log('animation');
        this.divJump.style.transform = `rotate(${deg}deg)`;
        if (deg < 360) {
            this.setState({
                deg: deg + 20
            });
            window.requestAnimationFrame(this.animation);
        }
    }

    changeBtnColor() {
        this.annimationDiv.style.display = 'none';
>>>>>>> 1d187b09360d94b136731f25df0525791b684005
    }




    render() {
        console.log('rendered count:', this.state.count);
        requestAnimationFrame(this.animation);
        return (
            <div>
<<<<<<< HEAD
                <div>
                    <input ref={input => {this.searchInput = input;}} onKeyUp={ () => this.inputSelectChange() } type="text" />
                    <svg width="150" height="100" viewBox="0 0 3 2">
                        <rect width="1" height="2" x="0" fill="#008d46" />
                        <rect width="1" height="2" x="2" fill="#324533" />
                        <rect width="1" height="2" x="1" fill="#d2232c" />
                    </svg>
=======
                <input type="week" />
                <main className="bg"></main>
                <section className="container">
                    i am lhyt
                </section>
                <div className="line">
                    <div ref={div => this.divJump = div}></div>
                </div>
                <div className="triangle">
                    <button onClick={() => { this.changeBtnColor() }}>点击换颜色</button>
                    <div ref={div => { this.annimationDiv = div; }}></div>
                </div>
                <div className="location">
                    <div id="scroll">
                        <div id="box"></div>
                    </div>
>>>>>>> 1d187b09360d94b136731f25df0525791b684005
                </div>
                <div className="shape"></div>
                <div className="box">
                    <div className="ball"></div>
                </div>
                <div className="center">
                    <div id="conterInner"></div>
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