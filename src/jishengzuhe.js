// 寄生组合式继承
// 基本思想：借助构造函数继承属性 原型链的混成形式继承方法
// 不必为了指定子类型的原型去调用超类的构造函数 我们只需要超类原型的一个副本 
// 本质上是使用寄生式继承来继承超类型的原型 然后再将结果指定给子类型的原型

// 第一步：创建超类原型的一个副本
// 第二步：为创建的副本添加constructor属性
// 第三步：将新创建的对象赋值给子类型的原型

// 在组合继承的基础上 修改一下 用写好的 "工厂函数" 来替换为子类型原型赋值的语句

// 优点：只调用一次超类的构造函数 效率更高 避免在超类的原型上创建不必要的 多余的属性 原型链保持不变
// 因此寄生组合继承是引用类型最理性的继承方式

function inheritProperty(subType, superType) {
    let prototype = Object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}
function Person(name) {
    this.name = name;
    this.colors = ['白色', '蓝色'];
}
Person.prototype.paint = function (p) {
    console.log(p + '画画，用' + this.colors);
};
function Student(name, grade) {
    Person.call(this, name);
    this.grade = grade;
}
inheritProperty(Student, Person);

let p1 = new Student('bell', '二年级');
console.log(p1);
console.log(p1.name);
console.log(p1.grade);
console.log(p1.colors);
p1.paint('Lisa');