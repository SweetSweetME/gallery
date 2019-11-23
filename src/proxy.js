var obj = {
    a: 1,
    b: 2
};

var p = new Proxy(obj, {
    get(target, key, value) {
        if (key === 'c') {
            return '自定义get-c结果'
        }
        return target[key];
    },
    set(target, key, value) {
        if (value === 4) {
            target[key] = '自定义set结果'
        } else {
            target[key] = value
        }
    },
    has(target, key, value) {
        if (key === 'a') {
            return false;
        }
        return key in target;
    }
});

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
obj.d = 4;
console.log(obj.d);
console.log(p.a);
console.log(p.b);
console.log(p.c);
p.d = 4;
console.log(p)
console.log('a' in obj);
console.log('b' in p);