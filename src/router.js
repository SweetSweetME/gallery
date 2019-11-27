import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NotFound } from 'COMP';
import { LAYOUT } from './common';
import pages from './pages'; // pages 返回的是一个对象 应该拿到这个对象再取出来对应的组件:)
import Header from './pages/Layout/Header';

const getRoute = layout => LO.map(layout, (value, key) => {
    // console.log(value, value.routeConfig);
    return <Route  {...value.routeConfig} key={key} component={pages[value.compName]} />
})

export default (
    // 可以放数组！
    <HashRouter>
        <Switch>
            <Redirect exact path="/" to={'home'} />
            {getRoute(LAYOUT)}
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
)