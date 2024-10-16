function maxVowels(s: string, k: number): number {
    let count=0;
    let ans = 0;
    let vowelString = 'aeiou';
    for(let i=0;i<s.length;i++){
        if(i<k){
            if(vowelString.includes(s[i])) count++;
        }
        else{
            if(vowelString.includes(s[i]) && !vowelString.includes(s[i-k])) count++;
            else if(!vowelString.includes(s[i]) && vowelString.includes(s[i-k])) count--;
        }
        ans = Math.max(ans,count);
    }
    return ans;
}