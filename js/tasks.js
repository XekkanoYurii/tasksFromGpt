function filterArray(numbers, value) {
    const arryOfNum = [];
    for (let i = 0; i < numbers.lenght; i++){
        if (numbers[i > value]) {
        arryOfNum.push(numbers[i])
        }
    }
    return arryOfNum
}
console.log(filterArray([1, 2, 4, 6, 8, 9, 0, 12], 5));
