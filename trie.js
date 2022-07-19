class Node {
	constructor() {
		this.adj = [];
		this.end = false;
	}
}

class Trie {
	constructor() {
		this.root = new Node();
	}

	insert(s) {
		let curr = this.root;
		for (let ch of s) {
			let loc = ch.charCodeAt(0) - "a".charCodeAt(0);
			if (!curr.adj[loc]) {
				curr.adj[loc] = new Node();
			}
			curr = curr.adj[loc];
		}
		curr.end = true;
	}

	find(s) {
		let curr = this.root;
		for (let ch of s) {
			let loc = ch.charCodeAt(0) - "a".charCodeAt(0);
			if (!curr.adj[loc]) return false;
			curr = curr.adj[loc];
		}
		return curr.end;
	}

	erase(s) {
		let curr = this.root;
		for (let ch of s) {
			let loc = ch.charCodeAt(0) - "a".charCodeAt(0);
			if (!curr.adj[loc]) {
				throw new Error("word does not exists");
			}
			curr = curr.adj[loc];
		}
		curr.end = false;
	}
}

try {
	let trie = new Trie();
	trie.insert("sachin");
	console.log(trie.find("sachin"));
	trie.erase("sachinak");
	console.log(trie.find("sachinak"));
	console.log(trie.find("sac"));
} catch (error) {
	console.log(error.message);
}
