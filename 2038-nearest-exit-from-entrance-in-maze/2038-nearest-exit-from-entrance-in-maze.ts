function bfs(maze, visited: boolean[][], s: number[]) {
    const r = maze.length;
    const c = maze[0].length;
    visited[s[0]][s[1]] = true;
    const delta = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    let tempAns = 0;
    let ans = 10000;
    const queue = []
    queue.push([s[0],s[1],0])
    while (queue.length) {
        const [x, y,steps] = queue.shift()
        for (let i = 0; i < 4; i++) {
            const [deltaX, deltaY] = delta[i]
            const newX = x + deltaX
            const newY = y + deltaY
            if (newX >= 0 && newY >= 0 && newX < r && newY < c && maze[newX][newY] === '.' && visited[newX][newY] == false) {
                visited[newX][newY] = true
                if (newX === 0 || newX === r - 1 || newY === 0 || newY === c - 1) {
                    return steps+1;
                }
                queue.push([newX, newY,steps+1])
            }
        }
    }
    return ans === 10000 ? -1 : ans
}
function nearestExit(maze: string[][], entrance: number[]): number {
    const r = maze.length;
    const c = maze[0].length;
    const visited = [];
    for (let i = 0; i < r; i++) {
        visited.push(new Array(c).fill(false));
    }
    const ans = bfs(maze, visited, entrance)
    return ans
};