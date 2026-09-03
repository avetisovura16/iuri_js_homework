let numbers = [20,10,13,64,53,64,67,38,82,93,30,9,93,6,32,4,32]
let min = numbers[0]
let i = 0

while (i < numbers.length) {
    if (numbers[i] < min) {
        min = numbers[i];   
    }
    i++;
}

console.log(min); 
