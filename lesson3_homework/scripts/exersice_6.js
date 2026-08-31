let age = Number(prompt(`enter your age`));
let name = prompt(`enter your name`);
let cleanName = name.trim().toLowerCase();
if(age < 18) {
    console.log(`Sorry, you cannot enter.`);
} else if (age >= 21 && cleanName === "nino") {
    console.log(`Welcome, VIP!`);
} else if (age % 2 === 0 || cleanName === "giorgi") {
    console.log(`You get a free drink!`);
} else {
    console.log(`Welcome in. Enjoy your evening.`)
}

