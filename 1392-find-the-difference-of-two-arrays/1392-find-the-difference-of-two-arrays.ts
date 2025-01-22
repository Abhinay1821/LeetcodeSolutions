function findDifference(nums1: number[], nums2: number[]): number[][] {
    const map = new Map<number,number>()
    for(const val of nums1){
        if(!map.has(val)){
            map.set(val,1)
        }
    }
    const ans1 = []
    for(let i=0;i<nums2.length;i++){
        if(!map.has(nums2[i])){
            ans1.push(nums2[i])
        }
        else{
            map.set(nums2[i],0);
        }
    }
    const ans2 = []
    for(const [key,value] of map){
        if(value!==0) ans2.push(key);
    }
    return [ans2,ans1]
};