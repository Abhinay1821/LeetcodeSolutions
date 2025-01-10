function countBits(n: number): number[] {
    const arr = new Array(n+1).fill(-1)
    arr[0]=0
    for(let i=1;i<=n;i++){
        if(i%2==0){
            arr[i] = arr[i/2]
        }
        else {
            arr[i] = arr[(i-1)/2]+1
        }
    }
    return arr
};