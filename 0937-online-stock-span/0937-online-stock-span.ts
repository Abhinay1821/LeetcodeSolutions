// class Stack<T>{
//     private items: T[] = [];

//     push(element:T):void{
//         this.items.push(element)
//     }
//     pop():number | undefined{
//         if(this.items.length===0) return undefined;
//         return this.items.pop();
//     }
//     peek():number | undefined {
//         return this.item[this.length-1]
//     }
//     size():number{
//         return this.items.length
//     }
//     isEmpty(): boolean{
//         return this.items.length === 0
//     }
// }
class StockSpanner {
    // private stack:Stack<number>
    private arr:Array<number>
    constructor() {
        this.arr = new Array()
    }

    next(price: number): number {
        let ans=1;
        for(let i=this.arr.length-1;i>=0;i--){
            if(this.arr[i]<=price){
                ans++;
            }
            else break;
        }
        this.arr.push(price)
        return ans;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */