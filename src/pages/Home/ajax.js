function Ajax(params) {
    params = params || {};
    params.data = params.data || {};
    var _json = params.jsonp ? jsonp(params) : json(params);
    function json(params) {
        params.type = (params.type || 'GET').toUpperCase();
        var urlData = formatParams(params.data); // 格式化数据
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest(); // xhr = new window.XMLRequestHttp();

        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        var headers = params.headers || {};
        if (params.type === 'GET') {
            xhr.open(params.type, params.url + '?' + urlData, true); // xhr.open(type, url, true); true 异步执行回调函数
            // 初始化一个请求
            setHeaders(xhr, headers);
            xhr.send(null); // 发送一个请求
        } else {
            xhr.open(params.type, params.url, true);
            setHeaders(xhr, headers);
            xhr.send(JSON.stringify(params.data));  // send  发送请求 写上需要传过去的参数

        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    var response = '';
                    var type = xhr.getResponseHeader('Content-Type');
                    if (type.indexOf('xml') !== -1 && xhr.responseXML) {
                        response = xhr.responseXML;
                    } else if (type.indexOf('application/json') !== -1) {
                        response = JSON.parse(xhr.responseText);
                    } else {
                        response = xhr.responseText
                    }
                    params.success && params.success(response);
                } else {
                    params.error && params.error(status);
                }
            }
        }
    }
}

function formatParams(data) {
    // 使用 encodeURIComponent 对 URI的某部分编码
    var arr = [];
    for (var key in data) {
        arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    // 添加随机数，防止缓存
    arr.push('v=' + random());
    return arr.join('&');
}
function random() {
    return Math.floor(Math.random() * 10000 + 500);
}
function setHeaders(xhr, headers) {
    for (var key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
}

Ajax({
    type: 'GET',  // 判断是什么请求
    url: 'http://baidu.com', // 请求url
    data: {
        title: '123',
        context: '内容'
    },
    headers: { // xhr.setRequestHeaders('Content-type', 'application/json');
        'Content-Type': 'application/json',
        token: 'xxx'
    },
    success(res) { // 成功后调用这个回调函数
        console.log(res)
    },
    error(err) { // 失败后调用这个回调函数
        console.log(err);
    }
});