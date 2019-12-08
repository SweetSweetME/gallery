// 寄生式继承 【与原型式继承思路紧密相关】
// 基本思路：就像是创建了一个工厂模式函数
// 创建一个仅用于封装继承过程的函数 该函数在内部以某种方式增强对象【添加函数 属性等】最后返回对象
// 在考虑对象而不是自定义类型和构造函数的情况下，寄生式继承是一种有用的模式
// 缺点：1. 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而效率低下
// 2. 同原型链继承 原型式 继承一样 引用类型值会被共享
function createAnother(original) {
    let clone = Object(original);
    clone.sayHi = function () {
        console.log('hi');
    }
    clone.hobby.push('吃零食');
    return clone;
}

let person = {
    name: 'bell',
    age: '21',
    hobby: ['听歌']
}
let p2 = createAnother(person);
console.log(p2);
p2.sayHi();