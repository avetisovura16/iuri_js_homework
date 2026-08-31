let n = Number(prompt("Add up to:"));
let total = 0;

for (let i = 1; i <= n; i++) {
    total += i; 
}

console.log(`The sum of 1 to ${n} is ${total}`);
