class SmallestInfiniteSet {
    private set: Set<number>; // Declare instance property

    constructor() {
        this.set = new Set(); // Initialize the set
    }

    popSmallest(): number {
        let i=1
        for(i;i<Number.MAX_SAFE_INTEGER;i++){
            if(this.set.has(i)) continue;
            else break;
        }
        this.set.add(i)
        return i
    }

    addBack(num: number): void {
        if(this.set.has(num)){
            this.set.delete(num)
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */