let numbers = [];
let i = 0;


for (let i = 0; i < 100; i++) {
    let randomnumber = Math.floor(Math.random() * 2000) - 1000;
    numbers.push(randomnumber);
}
console.log(numbers);

let max = numbers[0];
let min = numbers[0];

while (i < numbers.length) {
    if (numbers[i] > max) {
        max = numbers[i];   
    }
    i++;
}

let o = 0;
while (o < numbers.length) {
    if (numbers[o] < min) {
        min = numbers[o];   
    }
    o++;
}


let t = 0
let positivenumbers = []
while (t < numbers.length) {

if (numbers[t] > 0 ) {
    positivenumbers.push(numbers[t])


}
    t++

}

let q = 0
let negativenumbers = []
while (q < numbers.length) {

if (numbers[q] < 0 ) {
    negativenumbers.push(numbers[q])


}
    q++

}

let p = 0
let zeros = []
while (p < numbers.length) {

if (numbers[p] === 0 ) {
    zeros.push(numbers[p])


}
    p++

}


let u = 0
let hundreds = []
while (u < numbers.length) {

if (numbers[u] === 100 ) {
    hundreds.push(numbers[u])


}
    u++

}




let odds = []
let evens = []
let w = 0
while (w < numbers.length) {

if (numbers[w] % 2 === 0 ) {
    evens.push(numbers[w])
} else {
    odds.push(numbers[w])
    
}
    w++

} 








console.log(`===== Statistics =====`);
console.log(`       `);
console.log(`Biggest number: ` + max);
console.log(`Smallest number: ` + min);
console.log(`       `);
console.log(`positive numbers: ` + positivenumbers.length)
console.log(`negarive numbers: ` + negativenumbers.length)
console.log(`zeros:` + zeros.length)
console.log(`       `);
console.log(`ovens: ` + evens.length)
console.log(`odds: ` + odds.length);
console.log(`       `);
console.log(`100: ` + hundreds.length );
 