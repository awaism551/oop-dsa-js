/*
 * Complete the 'bfs' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. 2D_INTEGER_ARRAY edges
 *  4. INTEGER s
 */

function bfs(n, m, edges, s) {
	// first create an adj map here
	let adjMap = new Map();
	edges.forEach((arr) => {
		let [snode, enode] = arr;
		let listvalues = adjMap.get(snode);
		if (listvalues) {
			listvalues.push(enode);
		} else {
			listvalues = [enode];
		}
		adjMap.set(snode, listvalues);
	});

	let distMultiplier = 0;
	let visited = new Set();
	let stack = [];
	let distMultMap = new Map();
	stack.push(s);
	while (visited.size < m) {
		let pnode = stack.pop();
		if (pnode && !visited.has(pnode)) {
			visited.add(pnode);
			let neighbours = adjMap.get(pnode);
			if (neighbours && neighbours.length) {
				distMultiplier++;
				neighbours.forEach((nbr) => {
					stack.push(nbr);
					// resultArr.push(6*distMultiplier)
					distMultMap.set(nbr, distMultiplier);
				});
			}
		}
	}
	let resultArr = [];
	// i=1,2,3,4,5, s=1
	// [6,6,12]
	// j=0;
	for (let i = 1; i <= n; i++) {
		if (i == s) continue;
		let multiplier = distMultMap.get(i);
		if (multiplier) {
			resultArr.push(6 * multiplier);
		} else {
			resultArr.push(-1);
		}
	}
	return resultArr;
}

let n = 5;
let m = 3;
let edges = [
	[1, 2],
	[1, 3],
	[3, 4],
];
let s = 1;
console.log(bfs(n, m, edges, s));
