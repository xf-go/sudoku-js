function makeRow(v = 0) {
    const array = new Array(9);
    array.fill(v);
    return array;
}

function makeMatrix(v = 0) {
    // return Array.from({length: 9})
    //             .map(() => makeRow(v));

    return Array.from({length: 9}, () => makeRow(v));
}

const a = makeMatrix();
// a[1][5] = 4;
console.log(a)