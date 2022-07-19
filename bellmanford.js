//single source shortest path

function bellmanford(edges, src, N) {
	let dist = new Array(N).fill(Infinity);
	dist[src] = 0;
	for (let i = 0; i < N - 1; i++) {
		for (let [u, v, w] of edges) {
			dist[v] = Math.min(dist[u] + w, dist[v]);
		}
	}

	for (let [u, v, w] of edges) {
		if (dist[u] + w < dist[v] && dist[v] !== Infinity) {
			console.log("negative cycle present in the graph");
			return;
		}
	}

	console.log(dist);
}

let edges = [
	[1, 2, 3],
	[3, 2, 5],
	[1, 3, 2],
	[3, 1, 1],
	[1, 4, 2],
	[0, 2, 4],
	[4, 3, -3],
	[0, 1, -1],
];

bellmanford(edges, 0, 5);
