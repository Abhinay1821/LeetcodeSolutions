function dfs(map,visited:boolean[],s:number):void{
    visited[s] = true;
    const arr = map.get(s)
    for(let i=0;arr && i<arr.length;i++){
        if(visited[map.get(s)[i]]===false){
            dfs(map,visited,map.get(s)[i])
        }
    }
}

function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    const map = new Map<number,number[]>()
    const visited = Array(n).fill(false)
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i!==j && isConnected[i][j]===1){
                if(map.has(i)){
                    map.get(i).push(j)
                }
                else{
                    map.set(i,[j])
                }
            }
        }
    }
    let ans=0;
    for(let i=0;i<n;i++){
        if(visited[i]===false){
            dfs(map,visited,i)
            ans++;
        }
    }
    return ans;
};