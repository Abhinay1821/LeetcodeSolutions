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

// function maxZigZag(node:TreeNode,direction:number,length:number){
//     if(node===null) return 0;
//     if(direction===0){
//         return maxZigZag(node.right,1)+1
//     }
//     else return maxZigZag(node.left,0)+1
// }
// function longestZigZag(root: TreeNode | null): number {
//     if(!root.left && !root.right) return 0
//     dfs(root,0)
//     return ans
// };

function longestZigZag(root: TreeNode | null): number {
    let ans = 0
    function dfs(root: TreeNode | null, dir: number, curr: number): void {
        if (root === null) return
        ans = Math.max(ans, curr)
        dfs(root.left, 0, dir ? curr + 1 : 1)
        dfs(root.right, 1, dir ? 1 : curr + 1)
    }
    if(!root) return 0
    dfs(root, 0, 0)
    dfs(root, 1, 0)
    return ans
};

// function dfs(root: TreeNode | null, isLeft: boolean, n: number): number {
//     if (root === null) {
//         return n;
//     }

//     let left = dfs(root.left, true, isLeft ? 0 : n + 1);
//     let right = dfs(root.right, false, !isLeft ? 0 : n + 1);

//     return Math.max(left, right);
// }

// function longestZigZag(root: TreeNode | null): number {
//     if (root === null) {
//         return 0;
//     }

//     return Math.max(dfs(root.left, true, 0), dfs(root.right, false, 0));
// };