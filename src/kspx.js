// function fn(arr) {
//     const baseValue = arr[arr.length - 1];
//     if (arr.length < 2) {
//         return arr;
//     }
//     const left = arr.filter((value, index) => {
//         return value <= baseValue && index !== arr.length - 1;
//     })
//     const right = arr.filter((value, index) => {
//         return value > baseValue;
//     });

//     console.log(left, right);

//     return [...fn(left), baseValue, ...fn(right)];
// }

// const arr = [1, 3, 5, 2, 1, 5, 6, 8];
// console.log(fn(arr));

// [1, 3, 5, 2, 1, 5, 6][]
// [1, 3, 5, 2, 1, 5][]
// [1, 3, 5, 2, 1][]
// [1][3, 5, 2]
// [][3, 5]
// [3][]
// [1, 1, 2, 3, 5, 5, 6, 8]

// 第二种办法
// function goodfn(arr, start = 0, end = arr.length - 1) {
//     if (start - end >= 0) {
//         return arr;
//     }
//     const baseValue = arr[end];
//     let j = start;
//     for (let i = start; i <= end; i++) {
//         if (arr[i] <= baseValue) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             j++;
//             console.log(j);
//         }
//         console.log('***');
//     }

//     goodfn(arr, start, j - 2);
//     goodfn(arr, j, end);

//     return arr;
// }

// console.log(goodfn(arr));

// 复习：
function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start - end >= 0) {
        return arr;
    }

    let baseValue = arr[end];
    let j = start;

    for (let i = start; i <= end; i++) {
        if (arr[i] <= baseValue) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    quickSort(arr, start, j - 2);
    quickSort(arr, j, end);

    return arr;
}
console.log(quickSort([14, 23, 1, 32, 54, 12, 3, 2, 1, 3, 4, 8]));