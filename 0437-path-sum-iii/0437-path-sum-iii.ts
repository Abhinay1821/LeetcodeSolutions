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

function dfs(root:TreeNode | null,ans:number[],target:number,tempNumberArray:number[]){
    if(!root) return
    tempNumberArray.push(root.val);
    dfs(root.left,ans,target,tempNumberArray)
    dfs(root.right,ans,target,tempNumberArray)
    let tempSum = 0;
    for(let i=tempNumberArray.length-1;i>=0;i--){
        tempSum+=tempNumberArray[i]
        if(tempSum === target){
            ans[0]++
        }
    }
    tempNumberArray.pop()
}
function pathSum(root: TreeNode | null, targetSum: number): number {
    let tempNumberArray = []
    let ans = [0]
    dfs(root,ans,targetSum,tempNumberArray)
    return ans[0]
};
