const promise = new Promise((resolve,reject)=>{
    const job="web developer";
    if(job=="IT"){
        resolve("Yes");
    }
    else{
        reject("No..!");
    }
});
promise.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
}).finally("promise End");