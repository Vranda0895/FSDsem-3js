let a=10;
let b=20;
function calculate(a,b,op)
{
    return op(a,b);
}
function add(x,y)
{
    return (x+y);
}
function multiply(x,y)
{
    return (x*y);
}
console.log(calculate(12,3,add));

//.map
let numbers= [1,2,3,4,5];
/*for(let i=0;i<numbers.size(); i++)
{
    console.log(numbers[i]* numbers[i]);
}
let squares = numbers.map(function(number)){
    return number * number; 
});*/

//using arrow function
let numbers = [1,2,3,4,5];
let s = numbers.map(number=> number*number);
console.log(s);
//.filter- works when condition satisfy
let numbers=[1,2,3,4,5];
let even = numbers.filter(number=>{
    return number%2 ==0;
})
console.log("even");

