// 复习二分法查找 
// 有序 且可以立即定位 【有索引值 如数组！】
// 增序
// 找最后一次出现的target
function binary(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;

    while (right - left > 1) {
        mid = parseInt((left + right) / 2); // js 中 ／ 不是只保留整数位 而是有小数位 当长度是偶数时 用到  向下取整
        if (arr[mid] <= target) {
            left = mid;
        } else {
            right = mid - 1;
        }
        // if (arr[mid] >= target) {
        //     right = mid;
        // } else {
        //     left = mid + 1;
        // }
    }
    if (arr[left] === target) {
        return left;
    }
    if (arr[right] === target) {
        return right;
    }
    return -1;
}
console.log(binary([1, 2, 3, 4, 5, 5, 5, 6, 7], 5));

// 如果找第一个出现的？
// if (arr[mid] >= target) {
//     right = mid;
// } else {
//     left = mid + 1;
// }