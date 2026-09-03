const numbers = [];
const targetnumber = Math.floor(Math.random() * 100);
let index = numbers.indexOf(targetnumber)

for (let i = 0; i < 50; i++) {
    let randomnumber = Math.floor(Math.random() * 100);
    numbers.push(randomnumber);
}

console.log(numbers);
console.log(`       `);

if(index !== -1) {
    console.log(`🎯find ` + targetnumber + ` at ` + index + ` position! `)
} else {
    console.log( `❌ number ` + targetnumber + ` was not found.`)
}

