const numbers = [12, 45, 7, 99, 31, 18, 50, 3];
const find = 50;
let index = numbers.indexOf(find)


if(index !== -1) {
    console.log(`find ` + find + ` at ` + index + ` position `)
} else {
    console.log( find + ` was not found`)
}