const NAV_MAP = {
    example: {
        title: '组件测试页面',
        routeConfig: {
            exact: true,
            component: 'Example',
            path: '/example'
        }
    },
    home: {
        title: '主页',
        routeConfig: {
            exact: true,
            component: 'Home',
            path: './home'
        }
    },
    illustration: {
        title: '插画',
        routeConfig: {
            exact: true,
            component: 'Illustration',
            path: './illustration'
        }
    }
}

export default NAV_MAP;