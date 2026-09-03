let cart = [];
cart.push("milk" , "bread" , "eggs" , "cheese" , "coffe" );
console.log(cart);
cart.unshift("chocolate")
console.log(cart);

let lastitem = cart.length
cart.pop(cart[lastitem])
console.log(cart);

cart.shift(cart[0])
console.log(cart);