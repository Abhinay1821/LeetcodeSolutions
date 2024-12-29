function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let left = 0;
    let ans = 0;
    for(let i=0;i<s.length;i++){
        while(set.has(s[i])){
            set.delete(s[left]);
            left++;
        }
            set.add(s[i]);
            ans = Math.max(ans,i-left+1);
    }
    return ans;
};