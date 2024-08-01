/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let ans = 0;
    for(let i=0;i<details.length;i++){
        let s = Number(details[i][11]+details[i][12])
        if(s>60) ans++;

    }
    return ans;
};