// 二分查找 寻找增序数组里最后一次出现的数组元素 找不到返回-1 字节跳动2018面试题
/*
* 1. mid 长度为奇数时 是中间元素 偶数时 是偏左的元素
  2. mid位置的元素和targe比较 如果 arr[mid] >= target 
    那么要找的最后一个target 可能在 mid 处或者mid左边 或者右边 无法判断
    arr[mid] <= target 可能在 mid处 或者 mid的右边 mid 左边尽管有 也不是最右边的那个
    此时left = mid 不是mid - 1 是因为 可能 mid处的就是要找的那个
    反过来 arr[mid] > target 那么要找的那个值在mid的左边 right = mid -1
    判断 left < right 才会执行循环体 
    假如 left = length - 2 right = length - 1  发生这种情况的是：
    target很大 数组里没有
    right - left <= 1 target 和 arr[left] arr[right] 比较 哪个相等返回哪个 索引
    此时 mid 总是等于 left
*/
function binary(data, target){
    let left = 0;
    let right = data.length - 1;
    let mid = 0;
    while( right - left > 1 ){
        mid = parseInt((left + right) / 2);
        if( data[mid] <= target ){
            left = mid;
        }else{
            right = mid - 1;
        }
    }
    if( data[right] === target ){
        console.log(right);
        return;
    }
    if( data[left] === target ){
        console.log(left);
        return;
    }
    console.log(-1);
}

binary( [1, 2, 3, 3, 3, 4, 5, 5, 5, 6], 8 );