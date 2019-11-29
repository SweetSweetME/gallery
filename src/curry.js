function curry(fn) {
    const _fnArgLength = fn.length;
    function wrap(...args) {
        let _args = args;
        if (_fnArgLength === _args.length) {
            return fn.apply(null, _args);
        }

        function act(...args) {
            _args = _args.concat(args);
            if (_fnArgLength === _args.length) {
                return fn.apply(null, _args);
            }

            return act;


        }
        return act;

    }
    return wrap;
}

function factorial(num, total, rest) {
    if (num == 0) return total;
    return factorial(num - 1, num * total * rest, rest);
}

const curryFactorial = curry(factorial);
console.log(curryFactorial(4)(1)(1));