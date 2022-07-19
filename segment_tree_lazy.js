class SegmentTreeLazy {
	constructor(n) {
		this.st = new Array(4 * n).fill(0);
		this.lazy = new Array(4 * n).fill(false);
		this.rem = new Array(4 * n).fill(0);
	}

	apply(v, ss, se, val) {
		this.st[v] = val * (se - ss + 1);
		/**
		 * unless there is a common range we remember the value to update;
		 */
		if (se != ss) {
			this.lazy[v] = true;
			this.rem[v] += val;
		}
	}

	propogate(v, ss, se) {
		/**
		 * we are propagating on this node and this need wont be lazy anymore
		 *
		 */
		if (this.lazy[v]) {
			this.lazy[v] = false;
			let mid = parseInt(`${(ss + se) / 2}`);
			/**
			 * we split because we need to update the child node
			 * and it needs the num of children to updates its value correctly
			 * which can be found by ss and se;
			 */
			this.apply(2 * v, ss, mid, this.rem[v]);
			this.apply(2 * v + 1, mid + 1, se, this.rem[v]);
			this.rem[v] = 0;
		}
	}

	update(v, ss, se, qs, qe, val) {
		/**
		 * v -> node
		 * ss -> segment start, se -> segment end;
		 * qs -> query range start , qe -> query range end;
		 * val -> value to be updated in the range
		 *
		 * three cases:
		 * 		- No Overlap
		 * 		- Full Overlap
		 * 		- Partial Overlap
		 */
		//No Overlap
		if (ss > qe || se < qs) return;

		// Full Overlap
		if (ss >= qs && se <= qe) {
			//we need to pass the ss se because we can calculate the number of child nodes
			/**
			 * apply method remembers the number of pending updates,
			 * but updates the parent node to correct value.
			 */
			this.apply(v, ss, se, val);
			return;
		}

		/**
		 * Partial Overlap
		 * in this we need to go deeper in the tree to
		 * since we dont have correct value in all the children we need to make sure while
		 * recursing wer get all the correct value, this can be done by
		 * propagating the changes to the child nodes
		 * 						x(lazy and has rem value)
		 * 			y(in range)		z(not in range)
		 * 		a		b
		 * |--------------------| -> range update or query
		 *
		 * we need to pass the correct value to y and z before updating or querying which is set the
		 * rem value to y and by calling apply on y and z
		 * apply will mark y an z as lazy and increments their rem value
		 */

		this.propogate(v, ss, se);
		let mid = parseInt(`${((ss+se)/2)}`);
		this.update(2 * v, ss, mid, qs, qe, val);
		this.update(2 * v + 1, mid + 1, se, qs, qe, val);
		this.st[v] = this.st[2 * v] + this.st[2 * v + 1];
	}

	query(v, ss, se, qs, qe) {
		if (ss > qe || se < qs) {
			return 0;
		}
		if (ss >= qs && se <= qe) {
			return this.st[v];
		}

		//partial overlap
		//we need to have proper values in children before querying so we propagate
		this.propogate(v, ss, se);

		let mid = parseInt(`${(ss + se) / 2}`);
		let ans = 0;
		ans += this.query(2 * v, ss, mid, qs, qe);
		ans += this.query(2 * v + 1, mid + 1, se, qs, qe);
		return ans;
	}
}

{
	let n = 1e5 + 5;
	let arr = [ 5, 4, 2, 3, 5 ];
	
	const seg = new SegmentTreeLazy(n);
	for (let i = 0; i < arr.length; i++) {
		seg.update(1,0,n-1, i+1,i+1, arr[i]);
	}
	console.log(seg.st);
	console.log(seg.query(1,0,n-1, 1, 3))
	seg.update(1, 0, n - 1, 2, 2, 1)
	console.log(seg.query(1, 0, n - 1, 1, 3));
	// seg.update(1, 0, n-1, 1, 5, 4);
	// seg.update(1, 0, n-1, 6, 10, 5);
	// console.log(seg.st);
	// console.log(seg.query(1, 0, n-1, 1, 5));
	// console.log(seg.query(1, 0, n - 1, 6, 10));
	// seg.update(1, 0, n - 1, 5, 7, 6);
	// console.log(seg.query(1, 0, n-1, 4, 8));
}
