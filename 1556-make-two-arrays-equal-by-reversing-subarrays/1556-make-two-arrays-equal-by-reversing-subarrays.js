/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    arr.sort();
    target.sort();
    for(let i=0;i<target.length;i++){
        if(arr[i]!=target[i]) return false;
    }
    return true;
};