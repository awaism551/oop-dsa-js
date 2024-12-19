// Priority queue implementation (min-heap)
class MinHeap {
	constructor() {
		this.heap = [];
	}
	push(val) {
		this.heap.push(val);
		this._bubbleUp();
	}
	size() {
		return this.heap.length;
	}
	pop() {
		if (this.size() === 1) return this.heap.pop();
		const top = this.heap[0];
		this.heap[0] = this.heap.pop();
		this._sinkDown();
		return top;
	}
	isEmpty() {
		return this.heap.length === 0;
	}
	_bubbleUp() {
		let idx = this.heap.length - 1;
		const element = this.heap[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.heap[parentIdx];
			if (element[1] >= parent[1]) break;
			this.heap[idx] = parent;
			idx = parentIdx;
		}
		this.heap[idx] = element;
	}
	_sinkDown() {
		let idx = 0;
		const length = this.heap.length;
		const element = this.heap[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swapIdx = null;

			if (leftChildIdx < length) {
				leftChild = this.heap[leftChildIdx];
				if (leftChild[1] < element[1]) {
					swapIdx = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.heap[rightChildIdx];
				if (
					(swapIdx === null && rightChild[1] < element[1]) ||
					(swapIdx !== null && rightChild[1] < leftChild[1])
				) {
					swapIdx = rightChildIdx;
				}
			}
			if (swapIdx === null) break;
			this.heap[idx] = this.heap[swapIdx];
			idx = swapIdx;
		}
		this.heap[idx] = element;
	}
}

var networkDelayTime = function (times, n, k) {
	let adjMap = new Map();
	for (let i = 0; i < times.length; i++) {
		let [snode, enode, time] = times[i];
		let listvalue = adjMap.get(snode);
		if (!listvalue) {
			listvalue = [[enode, time]];
		} else {
			listvalue.push([enode, time]);
		}
		adjMap.set(snode, listvalue);
	}
	let tt = 0;
	let visited = new Set();
	let pq = new MinHeap();
	pq.push([k, 0]);
	while (visited.size < n) {
		let poppedEl = pq.pop();
		if (!poppedEl) break;
		let [node, dist] = poppedEl;
		if (!visited.has(node)) {
			visited.add(node);
			tt = Math.max(tt, dist);
			let listvalues = adjMap.get(node);
			listvalues?.forEach((arr) => {
				let [nnode, ndist] = arr;
				pq.push([nnode, ndist + tt]);
			});
		}
	}
	if (visited.size == n) return tt;
	return -1;
};

let minTimeReq = networkDelayTime([[1, 2, 1]], 2, 2);
console.log(minTimeReq);
