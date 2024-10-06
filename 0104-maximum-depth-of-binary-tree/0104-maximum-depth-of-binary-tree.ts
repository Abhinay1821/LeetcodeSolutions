class QUEUE<T> {
    private items: T[];

    constructor(){
        this.items = [];
    }

    push(item: T): void {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.shift();
    }
    empty(): boolean {
        return this.items.length === 0;
    }
    size(): number {
        return this.items.length;
    }
}

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    
    const queue = new QUEUE<TreeNode>();
    queue.push(root);
    let depth = 0;

    while (!queue.empty()) {
        // Process all nodes at the current level
        let levelSize = queue.size();  // Number of nodes at the current level
        while (levelSize > 0) {
            const node = queue.pop();
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
            levelSize--;  // Decrease the number of nodes left to process at the current level
        }
        depth++;  // After processing the level, increase depth
    }

    return depth;
}
