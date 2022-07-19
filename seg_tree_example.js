class SegmentTreeFreq{
    constructor(n) {
        this.st = Array.from({length:4*n}, () => { return { min: Infinity, freq: -1 } });
    }

    query(v, ss,se,qs,qe) {
        if (ss > qe || se < qs) return {min:Infinity, freq:-1};

        if (ss >= qs && se <= qe) {
            return this.st[ v ];
        }

        let mid = parseInt(`${((ss + se) / 2)}`);

        let l1 = this.query(2 * v, ss, mid, qs, qe);
        let l2 = this.query(2 * v + 1, mid + 1, se, qs, qe);
        if (l1.min === l2.min) {
            return l1.freq + l2.freq;
        } else {
            return l1.min < l2.min ? l1.freq : l2.freq;
        }
    }

    
}