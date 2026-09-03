let numbers = [20 , 53 , 22 , 50, 31, 42 , 45 , 20 , 75 , 64 , 76 , 87 , 20 , 42 , 56 , 32 , 75 , 87 , 94 , 10 , 53 , 53 , 52]
const find = 53
let i = 0
let counts = 0

while(i < numbers.length) {
    if(numbers[i] === find) {
        counts = counts + 1
        
    }
    i++
    
    

}
console.log(find + ` appears ` + counts + ` times`)



