function prefixFunction(s){
    let n = s.length;
    let lps = new Array(n).fill(0);
    let l = 0;
    for (let i = 1; i < n; i++){
        l = lps[ i - 1 ];
        while (l > 0 && s[ l ] !== s[ i ]) {
            l = lps[l-1]
        }
        if (s[ l ] === s[ i ]) {
            lps[i] = l+1
        }
    }
    return lps;
}


(function main() {
    let s = "aabxaabxcaabxaabxay";
    let lps = prefixFunction(s);
    console.log(lps);
})();

