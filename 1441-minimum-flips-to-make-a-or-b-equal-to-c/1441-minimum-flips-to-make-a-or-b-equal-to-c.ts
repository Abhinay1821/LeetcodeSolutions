function minFlips(a: number, b: number, c: number): number {
    const binaryA = a.toString(2).split('').reverse().join('')
    const binaryB = b.toString(2).split('').reverse().join('')
    const binaryC = c.toString(2).split('').reverse().join('')
    let ans = 0;
    const maxlen = Math.max(binaryA.length,Math.max(binaryB.length,binaryC.length))
    for(let i=0;i<maxlen;i++){
        if(binaryC[i]==='1'){
            if((binaryA[i]===undefined || binaryA[i]==='0') && (binaryB[i]===undefined || binaryB[i]==='0')){
                ans++;
            }
        }
        else{
            if(binaryA[i]==='1' && binaryB[i]==='1') ans+=2
            else if(binaryA[i]==='1' || binaryB[i]==='1') ans+=1
        }
    }
    return ans
};