function factors(num) {
    const arr = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(factors(100));