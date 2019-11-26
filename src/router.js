import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NotFound } from 'COMP';
import { LAYOUT } from './common';
import pages from './pages'; // pages 返回的是一个对象 应该拿到这个对象再取出来对应的组件:)
import { getUtil } from './util';
import Layout from './pages/Layout'; // 可以这么拿  未来的你 还记得吗？

const getRoute = layoutCfg => LAYOUT[layoutCfg] && <Route component={pages[LAYOUT[layoutCfg].routeConfig.component]}></Route>

export default (
    // 可以放数组！
    <HashRouter>
        <Layout>
            <Switch>
                <Redirect exact path="/" to={'home'} />
                {getRoute(getUtil.getRoute())}
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </HashRouter>
)