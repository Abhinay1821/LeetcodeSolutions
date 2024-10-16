function isSubsequence(s: string, t: string): boolean {
    let i=0,j=0;
    while(j<t.length){
        if(s[i]===t[j]){
            i++;
            j++;
        }
        else{
            j++;
        }
    }
    return i===s.length ? true : false
};