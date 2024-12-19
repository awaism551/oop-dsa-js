function mergeIntervals(intervals) {
	let result = [];
	// Replace this placeholder return statement with your code
	if (intervals.length) {
		if (intervals.length == 1) {
			return intervals;
		}
		let i = 1;
		result.push(intervals[0]);
		do {
			if (intervals[i - 1][1] >= intervals[i][0]) {
				// it means there exists a conflict between these 2 indices
				let prevInterval = result.pop();
				if (prevInterval) {
					result.push([
						Math.min(prevInterval[0], intervals[i - 1][0], intervals[i][0]),
						Math.max(prevInterval[1], intervals[i][1], intervals[i - 1][1]),
					]);
				}
			} else {
				let prevInterval = result[result.length - 1];
				if (prevInterval[1] >= intervals[i][0]) {
					// conflict exist with already present value in result array
					result.pop();
					result.push([
						Math.min(prevInterval[0], intervals[i][0]),
						Math.max(prevInterval[1], intervals[i][1]),
					]);
				} else {
					result.push(intervals[i]);
				}
			}
			i++;
		} while (i < intervals.length);
	}
	return result;
}

// export { mergeIntervals };
let res = mergeIntervals([
	[1, 5],
	[4, 6],
	[6, 8],
	[11, 15],
]);

console.log("res", res);
