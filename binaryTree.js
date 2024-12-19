class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}
	insert(data) {
		let newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let nodesQueue = [];
			nodesQueue.push(this.root);
			while (nodesQueue.length) {
				let poppedNode = nodesQueue.shift();
				// console.log(' ' + poppedNode.data)
				if (poppedNode.left) {
					nodesQueue.push(poppedNode.left);
				}
				if (poppedNode.right) {
					nodesQueue.push(poppedNode.right);
				}
				if (!poppedNode.left) {
					poppedNode.left = newNode;
					break;
				}
				if (!poppedNode.right) {
					poppedNode.right = newNode;
					break;
				}
			}
		}
	}

	bfsTraversal() {
		if (this.root === null) {
			console.log("Empty Bt");
		} else {
			let nodesQueue = [];
			nodesQueue.push(this.root);
			while (nodesQueue.length) {
				let poppedNode = nodesQueue.shift();
				console.log(" " + poppedNode.data);
				if (poppedNode.left) {
					nodesQueue.push(poppedNode.left);
				}
				if (poppedNode.right) {
					nodesQueue.push(poppedNode.right);
				}
			}
		}
	}

	inorderTraversal(node = this.root) {
		if (node) {
			this.inorderTraversal(node.left);
			console.log(node.data + " ");
			this.inorderTraversal(node.right);
		}
	}

	preorderTraversal(node = this.root) {
		if (node) {
			console.log(node.data + " ");
			this.preorderTraversal(node.left);
			this.preorderTraversal(node.right);
		}
	}

	postorderTraversal(node = this.root) {
		if (node) {
			this.postorderTraversal(node.left);
			this.postorderTraversal(node.right);
			console.log(node.data + " ");
		}
	}

	bfsTraversalSearch(value) {
		// Apply bfs traversal search on BT and return node whose value matches
		if (this.root === null) {
			console.log("Empty Bt");
			return;
		}
		if (this.root.data == value) return this.root;
		let nodesQueue = [];
		nodesQueue.push(this.root);
		while (nodesQueue.length) {
			let poppedNode = nodesQueue.shift();
			if (poppedNode.data == value) return poppedNode;
			if (poppedNode.left) {
				nodesQueue.push(poppedNode.left);
			}
			if (poppedNode.right) {
				nodesQueue.push(poppedNode.right);
			}
		}
	}

	getDeepestNode() {
		if (this.root === null) {
			console.log("Empty Bt");
			return;
		}
		if (!this.root.left && !this.root.right) {
			return this.root;
		}
		let nodesQueue = [];
		nodesQueue.push(this.root);
		let poppedNode = null;
		while (nodesQueue.length) {
			poppedNode = nodesQueue.shift();
			if (poppedNode.left) {
				nodesQueue.push(poppedNode.left);
			}
			if (poppedNode.right) {
				nodesQueue.push(poppedNode.right);
			}
		}
		return poppedNode;
	}

	deleteDeepestNode() {
		if (this.root === null) {
			console.log("Empty Bt");
			return false;
		}
		if (!this.root.left && !this.root.right) {
			this.root = null;
			return true;
		}
		let deepestNode = this.getDeepestNode();
		let nodesQueue = [];
		nodesQueue.push(this.root);
		let poppedNode = null;
		while (nodesQueue.length) {
			poppedNode = nodesQueue.shift();
			if (poppedNode.left) {
				if (poppedNode.left == deepestNode) {
					poppedNode.left = null;
					return true;
				} else {
					nodesQueue.push(poppedNode.left);
				}
			}
			if (poppedNode.right) {
				if (poppedNode.right == deepestNode) {
					poppedNode.right = null;
					return true;
				} else {
					nodesQueue.push(poppedNode.right);
				}
			}
		}
		return poppedNode;
	}

	deleteNode(value) {
		// scenarios:
		// 1. no child of node to be deleted
		// 2. only left child of node to be deleted
		// 3. both left and right children of node to be deleted
		// Edge Cases: empty BT, single root Node
		// Approach: bfs traversal approach will be followed, algo will consider all above scenarios
		// Steps: Find the Node to be deleted
		// Find the Deepest Node
		// swap both node values
		// delete the deepest Node
		let toBeDelNode = this.bfsTraversalSearch(value);
		let lastNode = this.getDeepestNode();
		// Better approach is to use the same loop to get toBeDelNode and lastNode
		toBeDelNode.data = lastNode.data;
		this.deleteDeepestNode();
	}

	getHeight(n = 0) {
		// The height of a node in a binary tree is the number of edges on the longest path from that node to a leaf.
		// if height of binary tree=h, no of nodes=N then h=floor(log N)
		// base of log is 2 incase of binary tree
		let h = -1;
		if (n && n > 0) {
			h = Math.floor(Math.log(N) / Math.log(2));
		} else {
			// if no of nodes are not provided then calculate height of binary tree
			// using dfs traversal, first calculate height of left subtree and right subtree
			// then return max of both
			h = Math.max(
				// this.getLeftHeightOfNode(this.root),
				this.getLeftHeightOfNodeRecursively(this.root),
				this.getRightHeight(this.root)
			);
		}
		return h;
	}

	getLeftHeightOfNode(node = this.root) {
		if (!node) return -1;
		// calculate height of left subtree
		let curr = node;
		let h = 0;
		while (curr.left) {
			h++;
			curr = curr.left;
		}
		return h;
	}

	getLeftHeightOfNodeRecursively(node = this.root, h = 0) {
		if (!node) return h - 1;
		// calculate height of left subtree
		return this.getLeftHeightOfNodeRecursively(node.left, h + 1);
	}

	getRightHeight(node = this.root) {
		if (!node) return -1;
		// calculate height of right subtree
		let curr = node;
		let h = 0;
		while (curr.right) {
			h++;
			curr = curr.right;
		}
		return h;
	}

	getDepthOfTree() {
		// The depth of a node is the number of edges from the root to that particular node.
		// The depth represents the distance from the root to that node.
		// The depth of the root node is 0.
		// Better to approach this using recursion
		return this.getDepthOfNode(this.root);
	}

	getDepthOfNode(node = this.root, value, depth = 0) {
		// The depth of a node is the number of edges from the root to that particular node.
		if (node === null) return -1;
		if (node.data === value) return depth;
		let leftDepth = this.getDepthOfNode(node.left, value, depth + 1);
		if (leftDepth !== -1) return leftDepth;
		let rightDepth = this.getDepthOfNode(node.right, value, depth + 1);
		return rightDepth;
	}
	getMin() {} // use bfs traversal to loop through all nodes and find min
	getMax() {} // use bfs traversal to loop through all nodes and find max

	isBalanced(node = this.root) {
		// A binary tree is balanced if the height of the left and right subtree of any node differ by not more than 1.
		if (!node) {
			return true;
		}
		let leftHeight = this.getLeftHeightOfNode(node);
		let rightHeight = this.getRightHeight(node);
		if (
			Math.abs(leftHeight - rightHeight) <= 1 &&
			this.isBalanced(node.left) &&
			this.isBalanced(node.right)
		) {
			return true;
		}
		return false;
	}
	isValidBST(node, min = -Infinity, max = Infinity) {
		// An empty tree is a valid BST
		if (!node) {
			return true;
		}

		// The current node's value must be between min and max
		if (node.data <= min || node.data >= max) {
			return false;
		}

		// Recursively check the left subtree with updated maximum value
		// and the right subtree with updated minimum value
		return (
			isValidBST(node.left, min, node.data) &&
			isValidBST(node.right, node.data, max)
		);
	}

	countLeaves() {
		// For a perfect binary tree, the number of leaf nodes L can be calculated by: L=(N+1)/2
		// or if height is given L=2^h
		// I=count of internal nodes then I=(N-1)/2 or I=(2^h)-1
	}
	countNodes() {} // formulas given above

	countLeafNodes(root) {
		if (root === null) {
			return 0; // Empty tree or reached the end of a branch
		}

		if (root.left === null && root.right === null) {
			return 1; // This is a leaf node
		}

		// Sum the leaf nodes from both left and right subtrees
		return countLeafNodes(root.left) + countLeafNodes(root.right);
	}

	isNodePresent(node = this.root, value) {
		if (node === null) {
			return false;
		}
		if (node.data === value) {
			return true;
		}
		return isNodePresent(node.left, value) || isNodePresent(node.right, value);
	}

	findLowestCommonAncestor(node1, node2, cnode = this.root) {
		// The lowest common ancestor of two nodes n1 and n2 is the deepest node in the tree that has both n1 and n2 as descendants.
		// Approach: use dfs traversal, if both nodes are found on left and right side of current node then return current node
		if (cnode === null) {
			return null;
		}
		if (cnode === node1 || cnode === node2) {
			return cnode;
		}
		let left = findLowestCommonAncestor(node1, node2, cnode.left);
		let right = findLowestCommonAncestor(node1, node2, cnode.right);
		if (left !== null && right !== null) {
			return cnode;
		}
		return left !== null ? left : right;
	}
	findPath() {}
}

// let bt = new BinaryTree();
// bt.insert(2);
// bt.insert(1);
// bt.insert(5);
// bt.insert(10);
// bt.insert(0);
// bt.bfsTraversal();
// bt.insert(5);
// bt.insert(7);
// bt.bfsTraversal();

// Example usage
let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(20);
tree.root.right = new Node(30);
tree.root.left.left = new Node(40);
tree.root.left.right = new Node(50);
tree.root.right.left = new Node(55);
tree.root.left.left.left = new Node(60);

console.log("Before Deletion:");
tree.bfsTraversal(); // Output: 10, 20, 30, 40, 50

// tree.deleteNode(20);

// console.log("After Deletion:");
// tree.bfsTraversal(); // Output: 10, 50, 30, 40

let h = tree.getHeight(); // Output: 2
console.log("🚀 ~ h:", h);
