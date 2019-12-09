function jsonp({ url, params, callback }) {
    return new Promise((resolve, reject) => {
        // 创建script标签
        let script = document.createElement('script');
        // 将回调函数挂在 window 上面
        window[callback] = function (data) {
            resolve(data);
            // 代码执行后，删除插入的script标签
            document.body.removeChild(script);
        }
        // 回调函数加在请求地址上
        callback && (params = { ...params, callback })
        let arrs = [];
        for (let key in params) {
            arrs.push(`${key}=${params[key]}`);
        }
        script.src = `${url}?${arrs.join('&')}`;
        document.body.appendChild(script);
    });
}

export default jsonp;
// 思考为什么 要在window上注册 回调？
// 那你再想一下 什么时候调用的这个 回调？ 是 后段返回的数据里的 
// 此时 这个回调的 声明 和 调用不在一起 那这个函数不就是没声明就调用？尽管它被当成参数穿过去了呀
// 我认为 是需要将这个函数 注册到 window 上 不管在哪里用到 都可以  因为它在全局上呢
// 仅自己浅理解 希望早点找到权威解释