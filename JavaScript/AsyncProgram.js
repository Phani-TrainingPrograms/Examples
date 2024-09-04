function someLongRunningFunction() {
    let start = Date.now();
    while (Date.now() - start < 5000) {
        // do nothing
    }
    return "Hello";
}

console.log('Starting...');

let result = someLongRunningFunction();
console.log(result);
console.log('...Finishing');
///////////////////////////////////////////////////////////////

console.log("Start of script");

setTimeout(function() {
  console.log("First timeout completed");
}, 2000);

console.log("End of script");
/////////////////////////////////////////////////////////////////
// Declare function
function fetchData(callback) {
    setTimeout(() => {
      const data = {name: "John", age: 30};
      callback(data);
    }, 3000);
  }
  
  // Execute function with a callback
  fetchData(function(data) {
    console.log(data);
  });
  
  console.log("Data is being fetched...");
//////////////////////////Promise object///////////////////////////////////////////
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from the promise!");
    }, 2000);
});

myPromise.then(res =>{
    console.log(res);
}).catch(ex =>{
    console.error(ex);
})