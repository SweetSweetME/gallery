var str = 'aserfvsdaiojvafdjbvaajadkjdnaildcbhdcdgyuhjshghddjkkk';
// var str = 'aassddffertghyyefgfjknnjjjjdddoo';
function removeLeastString(str) {
    var arr = str.split('');
    console.log(Int32Array);
    const obj = {};
    for( let i = 0; i < arr.length; i++ ){
        if(!obj.hasOwnProperty(arr[i])){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
    console.log(obj);
    let flag = true;
    let k = 0;
    for( const key in obj ){
        if(flag){
            k = obj[key];
            flag = false;
        }
        
        if( obj[key] < k ){
            k = obj[key];
        }
    }

    console.log(k);

    const needString = [];

    for( const key in obj ){
        if( obj[key] == k ){
            delete obj[key];
        }else{
            needString.push(key);
        }
    }

    console.log(needString)

    for( let i = 0; i < arr.length; i++ ){
        if( needString.indexOf(arr[i]) == -1 ){
            arr[i] = ''
        }
    }

    return arr.join('');
}

// console.log(removeLeastString('aaabbccccddee'));
console.log(removeLeastString(str));
