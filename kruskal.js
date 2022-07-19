class DSU {
	parent;
	size;
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

		if (x === y) return;

		if (this.size[x] < this.size[y]) {
			[x, y] = [y, x];
		}

		this.parent[y] = x;
		this.size[x] += this.size[y];
	}

	print_parent() {
		console.log(this.parent);
	}
	print_size() {
		console.log(this.size);
	}
}

function kruskal(edges, N) {
	let dsu = new DSU();
	dsu.make_set(N);
	let spanningEdges = [];
	let cost = 0;
	for (let [w, u, v] of edges) {
		let x = dsu.find(u);
		let y = dsu.find(v);
		if (x === y) continue;
		else {
			cost += w;
			spanningEdges.push([u, v]);
			dsu.union_sets(u, v);
		}
	}
	console.log(`${cost} and`, spanningEdges);
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
edges.sort((a, b) => a[0] - b[0]);
kruskal(edges, 1e5 + 6);

/**
 * class DSU{
    parent
    size
    constructor(){
        this.parent = []
        this.size = []
    }
    make_set(N){
        for(let i = 0;i<N;i++){
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }
    
    find(v){
        if(this.parent[v] === v) return;
        return this.parent[v] = this.find(this.parent[v])
    }
    
    union_sets(u,v){
        let x = this.find(u);
        let y = this.find(v);
        if(x === y) return 0;
        
        if(this.size[x] < this.size[y]){
            [x,y] = [y,x]
        }
        this.parent[y] = x;
        this.size[x]+=this.size[y]
        return 1
    }
}
 * 
 */