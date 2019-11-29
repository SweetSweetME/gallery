let a = 'qw';
const s: string = '2' as string;

interface fn {
    (a: number, b: number): number
}

interface mytotal {
    (a: number, b: number): number
}



let myFun: fn = function (a: number, b: number): number {
    return a + b;
}


let total: mytotal = function (a: number, b: number): number {
    return a + b
}
