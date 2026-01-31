// global and local scope 

var value=10;  // global scope
function showData(){
    console.log(value);
    //let value=50; // local scope
    console.log("value inside function: ",value);
   
}
showData();
console.log("value outside the function : ",value);


let myValue=200;
function showDatas(){
    var data =20;
    console.log(data);
    console.log(myValue);
}
showDatas();
