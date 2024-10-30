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
function dfs(root:TreeNode,count:number [],maxi:number): void{
    if(root === null) return;
    if(root.val>=maxi){
        count[0]++;
        maxi = root.val;
    }
    dfs(root.left,count,maxi)
    dfs(root.right,count,maxi)
}

function goodNodes(root: TreeNode | null): number {
    const count = [0];
    let maxi = -10000000;
    dfs(root,count,maxi);
    return count[0];
};