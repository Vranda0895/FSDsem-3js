function step1(){
    return Promise.resolve(10);
}
step1().then(result=>{
    console.log("step1", result);
    return result+10;
}).then (result=>{
    return result+10;
}).then(result=>{
    console.log("step 3", result);
    return result+10;

}).catch(error=>{
    console.log("error" , error);
});
