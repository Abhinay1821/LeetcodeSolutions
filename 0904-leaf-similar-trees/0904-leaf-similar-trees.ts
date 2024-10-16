/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function dfs(root: TreeNode | null,arr: number[]): void{
    if(root.left===null && root.right===null){
        arr.push(root.val);
        return;
    }
    if(root.left!==null)dfs(root.left,arr);
    if(root.right!==null)dfs(root.right,arr);
}
function isSameArray(arr1:number[],arr2:number[]): boolean{
    for(let i=0;i<Math.max(arr1.length,arr2.length);i++){
        if(arr1[i]!==arr2[i]) return false;
    }
    return true;
}
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const arr1 = [];
    const arr2 = [];
    dfs(root1,arr1);
    dfs(root2,arr2);
    return isSameArray(arr1,arr2);
};