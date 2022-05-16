//returns the sum if a > b, or the difference otherwise


const sum = (a, b) => {
    if(typeof(a) !== "number" || typeof(b) !== "number") {
        return "Bad Input" 
    } 
    if( a < b ) {
        return b - a
    }
    return a + b;
}
//write a function that raise a number to the third power
// math.pow(a, 10) given a number a, raise to the 10th power
// also can be written a**10, 
    
const toCube = (e, f) => {
    return Math.pow(e, f)
}
console.log(toCube(3,3));




export default sum;





// const sum = (a, b) => {
//     if(typeof(a) !== "number" || typeof(b) !== "number") {
//         return "Bad Input" //if the type of a or b is not equal to a number than
//     } //return 'bad input'
//     return a + b;
// }
// export default sum;