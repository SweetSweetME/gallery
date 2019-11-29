class A {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    render() {
        console.log(this.a);
        return 3;
    }
}

class B extends A {
    constructor(m, n) {
        super(1, 2);
        this.m = m;
        this.n = n;
    }
}

const obj = new B(4, 5);


// const suPobj = new A(1, 2);
// console.log(obj.render());

console.log(obj);