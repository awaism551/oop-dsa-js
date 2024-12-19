function networkDelayTime(times, n, k) {
	// start loop from that array where starting node=k
	// visited=Set, which will keep track of all the visited nodes
	// loop will run until visited nodes=n or we dont have any other path to go
	// return -1;
	let weightMap = new Map();
	let adjMap = new Map();
	for (let i = 0; i < times.length; i++) {
		let [snode, enode, time] = times[i];
		weightMap.set(`${snode}-${enode}`, time);
		let listvalue = adjMap.get(snode);
		// console.log(listvalue, typeof listvalue);
		if (listvalue) {
			listvalue.push(enode);
		} else {
			listvalue = [enode];
		}
		// listvalue = listvalue ? listvalue.push(enode) : [enode];
		// console.log(listvalue, typeof listvalue);
		adjMap.set(snode, listvalue);
	}

	let visited = new Set();
	visited.add(k);
	let stack = [k];
	// let maxTimeArr = [];
	let minTimeReq = 0;
	while (visited.size != n) {
		let popped = stack.pop();
		let listvalue = adjMap.get(popped);
		let maxWeight = 0;
		listvalue.forEach((node) => {
			let weight = weightMap.get(`${popped}-${node}`);
			maxWeight = Math.max(maxWeight, weight);
			stack.push(node);
			visited.add(node);
		});
		// maxTimeArr.push(maxWeight);
		minTimeReq += maxWeight;
	}
	return minTimeReq;
}

// export { networkDelayTime };
// let minTimeReq = networkDelayTime(
// 	[
// 		[1, 2, 5],
// 		[1, 3, 10],
// 		[1, 4, 15],
// 	],
// 	4,
// 	1
// );

let minTimeReq = networkDelayTime(
	[
		[1, 2, 1],
		[2, 3, 2],
		[3, 4, 3],
		[4, 1, 4],
	],
	4,
	2
); // 3

console.log("🚀 ~ minTimeReq", minTimeReq);
