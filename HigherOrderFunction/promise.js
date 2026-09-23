const promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("op success");
    }
    else{
        reject("operation failed");
    }
});

promise.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
});