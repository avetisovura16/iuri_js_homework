const age = 20;
const hasTicket = true;
const isStudent = false;

console.log(`Is the person at least 18 and does the person have a ticket? : ${age >= 18 && hasTicket}`);
console.log(`Is the person a student or does the person have a ticket?: ${age <= 18 && hasTicket}`);
console.log("Not a student:", !isStudent);
console.log(`Is the person under 18 or a student? : ${age < 18 || isStudent } `)
console.log(`Is the person at least 18 and not a student? : ${age >= 18 || !isStudent } `)
