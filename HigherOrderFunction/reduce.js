//combining all elements to a single value
let numbers = [10,20,30,40];
let total = numbers.reduce((max,number)=>{
   return( (number>max)? number : max);
    

},numbers[0]);
console.log(total);
