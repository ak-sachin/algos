class Segmentree {
	constructor(n) {
		this.t = new Array(4 * n).fill(0);
		// this.build(arr);
	}
	insert(node, nrl, nrr, id, val) {
		if (nrl === id && nrr === id) {
			this.t[node] = val;
			return;
		}
		if (id < nrl || id > nrr) {
			return;
		}

		let tm = ~~((nrr + nrl) / 2);
		this.insert(2 * node, nrl, tm, id, val);
		this.insert(2 * node + 1, tm + 1, nrr, id, val);

		this.t[node] = Math.min(this.t[2 * node], this.t[2 * node + 1]);
	}
	query(node, nrl, nrr, ql, qr) {
		if (ql <= nrl && qr >= nrr) {
			return this.t[node];
		}
		// No over lap
		if (ql > nrr || qr < nrl) {
			return Infinity;
		}
		let ans = 0;
		let nrm = ~~((nrl + nrr) / 2);
		//Query left sub tree
		ans = Math.min(
			this.query(2 * node, nrl, nrm, ql, qr),
			this.query(2 * node + 1, nrm + 1, nrr, ql, qr)
		);
		// Query right sub tree
		return ans;
	}
}

{
	let arr = [1, 2, 3, 4, 5, 6];

	let n = arr.length;
	const seg = new Segmentree(n);
	for (let i = 0; i < arr.length; i++) {
		seg.insert(1, 0, n - 1, i + 1, arr[i]);
	}
	console.log(seg.query(1, 0, n - 1, 1, 3));
	seg.insert(1, 0, n - 1, 3, 5);
	console.log(seg.query(1, 0, n - 1, 1, 3));
	seg.insert(1, 0, n - 1, 4, 0);
	console.log(seg.t);
	console.log(seg.query(1, 0, n - 1, 5, 6));
}
