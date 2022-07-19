const data = [
	{ id: 56, parentId: 62 },
	{ id: 81, parentId: 80 },
	{ id: 74, parentId: null }, // parent
	{ id: 76, parentId: 80 },
	{ id: 63, parentId: 62 },
	{ id: 80, parentId: 86 },
	{ id: 87, parentId: 86 },
	{ id: 62, parentId: 74 },
	{ id: 86, parentId: 74 },
];

let adj = {};
let parents = {};
var head;
for (let ele of data) {
	let { id, parentId } = ele;
	if (parentId == null) {
		head = id;
	}
	adj[id] = [];
}

for (let i = 0; i < data.length; i++) {
	const { id, parentId } = data[i];
	parents[id] = parentId;
	if (id != head) {
		adj[parentId].push(id);
	}
}
console.log({ adj, head });
let hierarachy = {};
function dfs(root, hierarachy) {
	hierarachy["id"] = root;
	hierarachy["parentId"] = parents[root];
	hierarachy["children"] = [];
	console.log(hierarachy);
	for (let i = 0; i < adj[root].length; i++) {
		hierarachy["children"].push({});
		dfs(adj[root][i], hierarachy["children"][i]);
	}
}

dfs(head, hierarachy);

console.dir(hierarachy, { depth: null });
