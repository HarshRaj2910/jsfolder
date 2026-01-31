var value=10;  // global scope
function showData(){
    console.log(value);
    //let value=50; // local scope
    console.log("value inside function: ",value);
   
}
showData();
console.log("value outside the function : ",value);

