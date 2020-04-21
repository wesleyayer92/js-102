function matrixAddition(nestArr1, nestArr2) {
    const totalResult = [];
    let nestResult = [];

    for (let i = 0; i < nestArr1.length; i++) {
        for (let j = 0; j < nestArr1[i].length; j++) {
            nestResult.push(nestArr1[i][j] + nestArr2[i][j]);
        }
        totalResult.push(nestResult);
        nestResult = [];
    }
    return totalResult;
}

console.log(matrixAddition([[1, 3], [2, 4]], [[5, 2], [1, 0]]));
// [[6, 5], [3, 4]]