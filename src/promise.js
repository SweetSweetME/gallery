// 成功的回调函数
function successCallback(result) {
    console.log("音频文件创建成功: " + result);
    return new Promise((resolve, reject) => {
        // reject('返回的promise');
    });
}

// 失败的回调函数
function failureCallback(error) {
    console.log("音频文件创建失败: " + error);
}

function audioSettings() {
    if (false) {
        return true;
    } else {
        return false;
    }
}

function createAudioFileAsync(set, success, error) {
    // if (set()) {
    //     success('成功');
    // } else {
    //     error('失败');
    // }
    return true;
}

function success2(s) {
    console.log(`第二次调用 then ${s}`);
}

// createAudioFileAsync(audioSettings, successCallback, failureCallback)

// new Promise((resolve, reject) => {
//     createAudioFileAsync ? resolve('success') : reject();

// }).then((res) => { return successCallback(res) }, () => { })
//     .then((res) => { success2(res) })
//     .then(() => console.log('第三次调用'))
//     .then(() => console.log('第四次调用'))
//     .catch(res => console.log(res));

// Promise.all()
const wait = ms => new Promise((resolve) => { setTimeout(resolve, ms) });
// wait(1000).then(() => { console.log('1s 过去了') });
function A() {
    // console.log('A函数');
    wait(1000).then(() => { console.log('1s 过去了') });
    // throw new Error('错误');

    return 'aa';
}
function B() {
    // setTimeout(() => { console.log('B函数') }, 1000);
    wait(2000).then(() => { console.log('2s 过去了') });
    return 'bb';
}
function C() {
    // setTimeout(() => { console.log('C函数') }, 3000);
    wait(3000).then(() => { console.log('3s 过去了') });
    return 'cc';
}
// Promise.all([A(), B(), C()]).then(([a, b, c]) => console.log('成功运行！', a, b, c)).catch(() => console.log('遇到了错误'));

const applyAsync = (acc, val) => acc.then(val);
const composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));

// doSomethingCritical()
//     .then(
//         result =>
//             doSomethingOptional()
//                 .then(optionalResult => doSomethingExtraNice(optionalResult))
//                 .catch(e => { console.log(e.message) })
//     ) // 即使有异常也会忽略，继续运行;(最后会输出)
//     .then(() => moreCriticalStuff())
//     .catch(e => console.log("Critical failure: " + e.message));// 没有输出

// 错误示例，包含 3 个问题！

// doSomething()
//     .then(
//         function (result) {
//             doSomethingElse(result) // 没有返回 Promise 以及没有必要的嵌套 Promise
//                 .then(newResult => doThirdThing(newResult));
//         }
//     )
//     .then(() => doFourthThing());
// 最后，是没有使用 catch 终止 Promise 调用链，可能导致没有捕获的异常

//一个好的经验法则是总是返回或终止 Promise 链，并且一旦你得到一个新的 Promise，返回它。下面是修改后的平面化的代码：
// doSomething()
//     .then(function (result) {
//         return doSomethingElse(result);
//     })
//     .then(newResult => doThirdThing(newResult))
//     .then(() => doFourthThing())
//     .catch(error => console.log(error));
// 使用 async/await 可以解决以上大多数错误，使用 async/await 时，最常见的错误就是忘记了 await 关键字。

// this will be counted as if the iterable passed is empty, so it gets fulfilled
var p = Promise.all([1, 2, 3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
// var p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// using setTimeout we can execute code after the stack is empty
// setTimeout(function () {
//     console.log(p);
//     console.log(p2);
//     console.log(p3);
// });

var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
// var resolvedPromisesArray = [];

var p = Promise.all('123');
// immediately logging the value of p
console.log(p);
setTimeout(() => console.log(p));