const NAV_MAP = {
    home: {
        title: '主页',
        compName: 'Home',
        routeConfig: {
            exact: true,
            path: '/home'
        }
    },
    example: {
        title: '组件测试页面',
        compName: 'Example',
        routeConfig: {
            exact: true,
            path: '/example'
        }
    },
    illustration: {
        title: '插画',
        compName: 'Illustration',
        routeConfig: {
            exact: true,
            path: '/illustration'
        }
    },
    http: {
        title: 'http协议',
        compName: 'Http',
        routeConfig: {
            exact: true,
            path: '/http'
        }
    }
}

export default NAV_MAP;