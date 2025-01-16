function orangesRotting(grid: number[][]): number {
    const row = grid.length
    const col = grid[0].length
    const oranges = Array.from({ length: row }, () => Array(col).fill(false));
    let orangeCount = 0
    const queue = []
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                oranges[i][j] = true;
                orangeCount++;
            }
            else if (grid[i][j] === 2) {
                queue.push([i, j])
            }
        }
    }
    if (!orangeCount) return 0;
    if (!queue.length) return -1
    const delta = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    let minutes = -1;
    while (queue.length) {
        let size = queue.length;
        while (size--) {
            const [x, y] = queue.shift()
            for (let i = 0; i < delta.length; i++) {
                const [deltaX, deltaY] = delta[i]
                const newX = x + deltaX
                const newY = y + deltaY
                if (newX >= 0 && newY >= 0 && newX < row && newY < col && grid[newX][newY] === 1 && oranges[newX][newY]) {
                    console.log(newX, newY)
                    oranges[newX][newY] = false
                    queue.push([newX, newY])
                    orangeCount--;
                }
            }
        }
        minutes++;
    }
    return orangeCount === 0 ? minutes : -1

};