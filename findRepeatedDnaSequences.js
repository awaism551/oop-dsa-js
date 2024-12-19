var findRepeatedDnaSequences = function (s) {
	let repeatSet = new Set(); // repeated substrings will be in this set
	let allSets = new Set(); // this set will contain all substrings of length k either repeated or not
	let i = 0;
	let k = 10;
	do {
		let substr = s.substr(i, k);
		if (!allSets.has(substr)) {
			// not in the set before, so add it into the set
			allSets.add(substr);
		} else {
			repeatSet.add(substr);
		}
		i++;
	} while (i + k <= s.length);
	// return repeatSet;
	return Array.from(repeatSet);
};

let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
let res = findRepeatedDnaSequences(s);
console.log("🚀 ~ res:", res);
