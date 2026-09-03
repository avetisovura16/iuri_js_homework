let numbers = [];
let numberlesshundred = 0;
let numbersmorefivehundred = 0
let i = 0;
let o = 0

for (let i = 0; i < 100; i++) {
    let randomnumber = Math.floor(Math.random() * 1000);
    numbers.push(randomnumber);
}
console.log(numbers);

while (i < numbers.length) {
    if (numbers[i] < 100) {
        numberlesshundred = numberlesshundred + 1;
    }
    i++;
}

while (o < numbers.length) {
    if (numbers[o] > 500) {
        numbersmorefivehundred = numbersmorefivehundred + 1;
    }
    o++;
}



console.log(`----------------------------------------`)
console.log(`total numbers : ` + numbers.length )
console.log(`numbers less then 100 : ` + numberlesshundred)
console.log(`numbers more then 500 : ` + numbersmorefivehundred)