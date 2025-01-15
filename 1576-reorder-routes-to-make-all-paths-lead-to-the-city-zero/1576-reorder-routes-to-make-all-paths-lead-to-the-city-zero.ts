function dfs(map,visited:boolean[],s:number,ans:number[]){
    visited[s]=true;
    const arr = map.get(s);
    for(let i=0;arr && i<arr.length;i++){
        if(visited[arr[i][0]]===false){
            if(arr[i][1]===0){
                ans[0]++
            }
            dfs(map,visited,arr[i][0],ans)
        }
    }
}
function minReorder(n: number, connections: number[][]): number {
    const map = new Map<number,number[][]>()
    const visited = new Array(n).fill(false)
    const size = connections.length
    for(let i=0;i<size;i++){
        const val0 = connections[i][0]
        const val1 = connections[i][1]
        if(map.has(val0)){
            map.get(val0).push([val1,0])
        }
        else if(!map.has(val0)){
            map.set(val0,[[val1,0]])
        }
        if(map.has(val1)){
            map.get(val1).push([val0,1])
        }
        else{
            map.set(val1,[[val0,1]])
        }
    }
    let ans = [0];
    dfs(map,visited,0,ans);
    return ans[0];
};