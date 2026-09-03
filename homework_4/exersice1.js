const numbers = [42, 7, -15, 100, 23, 8, 91];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[3]);

let lastnumber = numbers.length;


//last number
console.log(numbers[lastnumber - 1]);

//middle number
console.log(numbers[Math.floor(lastnumber / 2)]);

