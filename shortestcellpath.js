function shortestCellPath(grid, sr, sc, tr, tc) {
	/**
	@param grid: integer[][]
	@param sr: integer
	@param sc: integer
	@param tr: integer
	@param tc: integer
	@return: integer
	*/

	// Approach: use BFS approach, use Queue to track at which position current pointer is and how much distance is done till now
	// use Set to keep track of visited nodes so that we dont move again to same node again
	let queue = [];
	let dist = 0;
	queue.push([sr, sc, dist]);
	let visited = new Set();
	visited.add(`${sr}-${sc}`);
	let directions = [
		[-1, 0],
		[1, 0],
		[0, 1],
		[0, -1],
	];
	const totalrowlength = grid.length;
	const totalcolslength = grid[0].length;
	let crow = null,
		ccol = null;
	while (queue.length) {
		let poppednode = queue.shift();
		// console.log("🚀 ~ shortestCellPath ~ poppednode:", poppednode);
		[crow, ccol, cdist] = poppednode;
		dist = cdist;
		if (crow == tr && ccol == tc) {
			break;
		}
		for (let dir = 0; dir < directions.length; dir++) {
			let [cdirrow, cdircol] = directions[dir];
			let frow = crow + cdirrow;
			let fcol = ccol + cdircol;
			if (
				frow >= 0 &&
				fcol >= 0 &&
				frow < totalrowlength &&
				fcol < totalcolslength &&
				grid[frow][fcol] == 1 &&
				!visited.has(`${frow}-${fcol}`)
			) {
				// visited.add([frow, fcol]);
				visited.add(`${frow}-${fcol}`);
				queue.push([frow, fcol, dist + 1]);
				break;
			}
		}
	}
	if (crow == tr && ccol == tc) {
		return dist;
	}
	return -1;
}

// debug your code below
// const grid = [
// 	[1, 1, 1, 1],
// 	[0, 0, 0, 1],
// 	[1, 1, 1, 1],
// ];
// const sr = 0,
// 	sc = 0,
// 	tr = 2,
// 	tc = 0;
// console.log(shortestCellPath(grid, sr, sc, tr, tc));

const grid = [
	[1, 1, 1, 1],
	[0, 0, 0, 1],
	[1, 0, 1, 1],
];
const sr = 0,
	sc = 0,
	tr = 2,
	tc = 0;
console.log(shortestCellPath(grid, sr, sc, tr, tc));
