function closeStrings(word1: string, word2: string): boolean {
    const map1 = new Map<string,number>()
    const map2 = new Map<string,number>()
    if(word1.length !== word2.length) return false;
    for(let i=0;i<word1.length;i++){
        map1.set(word1[i],(map1.get(word1[i]) || 0) + 1)
        map2.set(word2[i],(map2.get(word2[i]) || 0) + 1)
    }

    const occMap = new Map<number,number>()
    for(const [key,value] of map1){
        if(!map2.has(key)) return false;
        occMap.set(value,(occMap.get(value) || 0) +1);
    }
    for(const value of map2.values()){
        if(!occMap.has(value) || occMap.get(value)===0) return false;
        else{
            occMap.set(value,occMap.get(value)-1);
        }
    }
    return true;



};