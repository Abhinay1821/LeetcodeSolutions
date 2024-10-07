// class QUEUE<T> {
//     private items: T[];

//     constructor(){
//         this.items = [];
//     }

//     push(item: T): void {
//         this.items.push(item);
//     }
//     pop(): T | undefined {
//         return this.items.shift();
//     }
//     empty(): boolean {
//         return this.items.length === 0;
//     }
//     size(): number {
//         return this.items.length;
//     }
// }

function maxDepth(root: TreeNode | null): number {
    if(root===null) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
}
