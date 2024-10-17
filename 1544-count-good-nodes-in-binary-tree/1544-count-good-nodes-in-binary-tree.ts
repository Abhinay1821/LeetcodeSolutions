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

function dfs(root: TreeNode|null,count:number[],value:number):void{
    if(root===null){
        return;
    }
    if(root.val>=value){
        count[0]++;
        value=root.val;
    }
    dfs(root.left,count,value);
    dfs(root.right,count,value);
}
function goodNodes(root: TreeNode | null): number {
    let count = [0];
    let value = -100001;
    dfs(root,count,value);
    return count[0];
};