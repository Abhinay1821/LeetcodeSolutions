/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 function gcd(a,b){
    while(a>0 && b>0){
        if(a>b){
            a=a%b;
        }
        else b = b % a;
    }
    if(a===0) return b;
    return a;
 }
var gcdOfStrings = function(str1, str2) {
    let ans = ""
    if(str1+str2 === str2+str1){
        const gcval = gcd(str1.length,str2.length);
        ans = str1.substring(0,gcval);
    }
    return ans;
};