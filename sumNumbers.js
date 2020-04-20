function sumNumbers(arr) {
    let sum = 0;
    for (index of arr) {
        sum += index;
    }
    return sum;
}

console.log(sumNumbers([3, 3, 3]));