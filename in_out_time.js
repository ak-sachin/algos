let timer = 1;
let inT = []
let vis = []
let adj = [ [] ]
let outT = []


function dfs(v) {
    vis[ v ] = 1;
    inT[ v ] = timer;
    timer+=1
    
    for (const child of adj[ v ]) {
        if (!vis[ child ]) {
            dfs(child);
        }
    }
    outT[ v ] = timer;
    timer += 1;

}

