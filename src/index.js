import React from 'react';
import ReactDom from 'react-dom';
import router from './router';
import Layout from './pages/Layout'; // 可以这么拿  不引入pages再去找Layout 直接引入Layout
import './style.less';


class Main extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    {router}
                </Layout>
            </div>
        )
    }
}

ReactDom.render(<Main />, document.getElementById("root"));
// jsx 语法 webpack 不能识别