// Your code goes here
const rapid = (str) => {
    result = ''
    Array.from(str).forEach(elem => {
        if('aeiou'.includes(elem)==false){
            result+=elem.toUpperCase();
        }})
    return result;
}


// Work above this line; do not change code below
let str = "John";

console.log(rapid(str));
