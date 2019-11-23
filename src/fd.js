// function debounce(delay, action, init = undefined) {
//     let tId
//     let result = init;
//     return function (...args) {
//         if (tId) clearTimeout(tId)
//         tId = setTimeout(() => {
//             result = action.apply(this, args);  // 绑定this
//             if (result instanceof Promise) {
//                 result.then((data) => result = data)
//                 console.log(result);
//             }
//         }, delay)
//         return result;
//     }
// }
function debounce(delay, action, init = undefined) {
    let tId
    let result = init;
    return new Proxy(
        action, {
        apply(target, thisArg, args) {
            return new Promise((resolve) => {
                if (tId) clearTimeout(tId)
                tId = setTimeout(() => {
                    // result = action.apply(this, args);  // 绑定this
                    // console.log('第一个');
                    console.log(thisArg);
                    result = Reflect.apply(target, thisArg, args)
                    resolve(result);
                }, delay)
                setTimeout(() => {
                    console.log('第二个');
                    resolve(result) // 两个resolve只能执行一个
                }, delay)
            })
        }
    }
    );
}
async function A() {
    let num = '没经过定时器'
    var ff = async () => {
        setTimeout(function () {
            console.log('异步');
            num = '定时器里的'
            console.log(num);
        }, 2000)
    };
    await ff();
    console.log(num)
    return num;
}
A()

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));


// (async () => {
//     class Counter {
//         constructor() {
//             this.i = 0
//             this.fn = debounce(10, this.add, 0)
//         }
//         add() {
//             return ++this.i
//         }
//     }

//     const counter = new Counter()

//     console.log(counter.add()) // 1
//     console.log(counter.add()) // 2

//     console.log(counter.fn()) // 0
//     console.log(counter.fn()) // 0
//     await wait(12)
//     console.log(counter.fn()) // 3
// })()

(async () => {
    const get = async i => i
    get.ss = () => { };
    console.log(get.ss, '&&&');
    console.log(await get(1))
    console.log(await get(2))
    const fn = debounce(10, get, 0)
    console.log(fn.ss, '&&&');

    // const fn = debounce(10, get, new Promise(resolve => resolve()))
    // console.log(fn instanceof Promise);
    // fn(3).then(i => console.log(i)) // fn(...).then is not a function

    fn(3).then(i => console.log(i))


    fn(4).then(i => console.log(i))
    await wait(20)

    // console.log(fn(3));
    // console.log(fn(4));
    fn(5).then(i => console.log(i));
    // console.log(fn(5));
})()

// 使用 Promise 简单封装 setTimeout，下同
// (async () => {
//     let num = 0
//     const add = () => ++num

//     add()
//     add()
//     console.log(num) // 2

//     const fn = debounce(10, add)
//     fn()
//     fn()
//     console.log(num) // 2
//     await wait(11)
//     console.log(num) // 3
// })()

// class Counter {
//     constructor() {
//         this.i = 0
//         this.fn = debounce(10, this.add, 0);
//     }
//     add() {
//         return this.i++
//         // console.log(this);
//     }
// }

// const counter = new Counter()
// counter.fn() // Cannot read property 'i' of undefined
