function isAnagram(s: string, t: string): boolean {
    const hmap = new Map<string,number>();
    for(let i=0;i<s.length;i++){
        if(hmap.has(s[i])){
            hmap.set(s[i],hmap.get(s[i])+1);
        }
        else{
            hmap.set(s[i],1);
        }
    }
    for(let i=0;i<t.length;i++){
        if(!hmap.has(t[i])) return false;
        if(hmap.has(t[i])){
            hmap.set(t[i],hmap.get(t[i])-1);
        }
    }
    for(const value of hmap.values()){
        if(value!==0) return false;
    }
    return true;
};