class MaxHeap {
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
	// Helper methods
	parent(index) {
		return Math.floor((index - 1) / 2);
	}

	leftChild(index) {
		return 2 * index + 1;
	}

	rightChild(index) {
		return 2 * index + 2;
	}
	_bubbleUp() {
		let i = this.heap.length - 1;
		while (i != 0 && this.heap[i] > this.heap[this.parent(i)]) {
			[this.heap[i], this.heap[this.parent(i)]] = [
				this.heap[this.parent(i)],
				this.heap[i],
			];
			i = this.parent(i);
		}
	}
	print() {
		console.log(this.heap);
	}
	extractMax() {
		if (this.heap.length === 0) return null;
		if (this.heap.length === 1) return this.heap.pop();
		const max = this.heap[0];
		this.heap[0] = this.heap.pop();
		this._sinkDown(0);
		return max;
	}
	_sinkDown(i) {
		while (i < this.size()) {
			let max = Math.max(
				this.heap[i],
				this.heap[this.leftChild(i)] ?? -Infinity,
				this.heap[this.rightChild(i)] ?? -Infinity
			);
			if (max == this.heap[i]) break;
			if (max == this.heap[this.leftChild(i)]) {
				[this.heap[i], this.heap[this.leftChild(i)]] = [
					this.heap[this.leftChild(i)],
					this.heap[i],
				];
				i = this.leftChild(i);
			} else {
				[this.heap[i], this.heap[this.rightChild(i)]] = [
					this.heap[this.rightChild(i)],
					this.heap[i],
				];
				i = this.rightChild(i);
			}
		}
	}
	heapify() {}
}

let mh = new MaxHeap();
mh.push(9);
mh.push(8);
mh.push(10);
mh.push(7);
mh.push(11);
mh.push(3);
mh.push(12);
mh.print();
let max = mh.extractMax();
console.log("🚀 ~ max:", max);
mh.print();
