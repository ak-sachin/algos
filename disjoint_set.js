const N = 1e5 + 6;

class DSU {
	parent;
	rank;
	constructor() {
		this.parent = [];
		this.size = [];
	}

	make_set(N) {
		for (let i = 0; i < N; i++) {
			this.parent[i] = i;
			this.size[i] = 1;
		}
	}

	find(v) {
		if (this.parent[v] === v) return v;
		return (this.parent[v] = this.find(this.parent[v]));
	}

	union_sets(u, v) {
		let x = this.find(u);
		let y = this.find(v);
		console.log({ u, v, x, y, rankx: this.size[x], ranky: this.size[y] });
		if (x === y) return;

		if (this.size[x] < this.size[y]) {
			[x, y] = [y, x];
			console.log(x, y);
		}
		this.parent[y] = x;
		this.size[x] += this.size[y];
	}

	print_parent() {
		console.log(this.parent);
	}
}

let edges = [
	[5, 1, 2],
	[6, 2, 3],
	[2, 4, 3],
	[9, 1, 4],
	[5, 3, 5],
	[10, 5, 6],
	[7, 6, 7],
	[1, 7, 8],
	[1, 8, 5],
];

let dsu = new DSU();
dsu.make_set(N);
edges.sort((a, b) => a[ 0 ] - b[ 0 ]);
console.log(edges);
let cost = 0;
for (const [w, u, v] of edges) {
    let x = dsu.find(u);
    let y = dsu.find(v);

    if (x === y) continue;
    else {
        cost += w; 
        console.log(`${u} --${v}`, '\n');
        dsu.union_sets(u, v);
    }
}
dsu.print_parent()
console.log(cost);

