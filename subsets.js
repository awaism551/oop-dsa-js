function findSubsets(nums) {
	let subsets = [];

	function dfs(index, currentSubset) {
		// Base case: if we reach the end of the array
		if (index === nums.length) {
			subsets.push([...currentSubset]);
			return;
		}

		// Include the current element
		currentSubset.push(nums[index]);
		dfs(index + 1, currentSubset);

		// Exclude the current element
		currentSubset.pop();
		dfs(index + 1, currentSubset);
	}

	dfs(0, []);
	return subsets;
}

// Example usage
let nums = [1, 2, 3];
console.log(findSubsets(nums));
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
