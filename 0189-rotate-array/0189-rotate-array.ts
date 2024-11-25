/**
 Do not return anything, modify nums in-place instead.
 */

function ro(array:number [],start:number,end:number): void{
    while (start<end){
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
}
function rotate(nums: number[], k: number): void {
    const len = nums.length;
    k = k % len;
    ro(nums,0,len-1);
    ro(nums,0,k-1);
    ro(nums,k,len-1);
};