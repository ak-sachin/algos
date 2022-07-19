let timer = 0;

function findBridge(v, vis, inT, low, adj, p=-1) {
    vis[ v ] = true;
    inT[v] = timer;
    low[ v ] = timer;
    timer++;

    for (let child of adj[ v ]) {
        if (child === p) continue;
        if (vis[ v ]) {
            low[v] = Math.min(low[v], inT[child])
        }
        else {
            findBridge(child, vis, inT, low, adj, v);
            low[ v ] = Math.min(low[ child ], low[ v ]);
            if (low[ child ] > low[ v ]) {
                console.log(`Bridge Edge found ${child} ---- ${v}`)
            }
        }
    }

}