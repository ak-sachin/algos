#include<bits/stdc++.h>
using namespace std;
#define endl "\n"
#define eb emplace_back
#define vi vector<int>


struct Node {
	int data ;
	Node left;
	Node right;
	
	Node(){
		data = -1;
		left = null;
		right = null;
	}
	
}

int levels[10000];
int parents[10000];
void dfs(Node* node, int level = -1, parent = -1){
	if(node != null){
		levels[node] = level;
		parents[node] = parent;
		dfs(node.left, level+1, node.val);
		dfs(node.right, level+1, node.val);
	}
}

class BT{
	
	
	int lca(int a, int b){
		if(levels[b] < levels[a]){
			swap(a,b);
		}
		int d = levels[b] - levels[a];
		
		while(d > 0){
			b = parents[b];
		}
		
		if(a == b) return a;
		
		while(parents[a] != parents[b]){
			a = parents[a];
			b = parents[b];
		}
		
		return parents[a];
	} 
}


int main(){
	int n;
	cin >> n;
	
	Node root = new Node()
	
	dfs(root, -1);
}