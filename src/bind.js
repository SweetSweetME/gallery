let obj = {
    ll: 'save'
}
Function.prototype.bind = function (that) {
    let self = this;
    console.log(this);
    return function () {
        return self.apply(that, arguments);
    }
}

let func0 = function (a, b, c) {
    console.log(this.ll);
    console.log([a, b, c]);
}

func0(3)