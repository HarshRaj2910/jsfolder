function showData(){
    console.log("hello");
}
showData();

// arrow function
const displayData=()=>{
    console.log("hello world!!");
}
displayData();

let disData=()=>{
    console.log("India");
}
disData();
// arrow function with arguments
let dispData=(a,b)=>{
    sum=a+b;
    console.log(sum);
}
dispData(5,3);

//  function having return type
function addValues(x,y){
    return x*y;             // exit statements
}
console.log(addValues(10,20));

// call back function --> function pass through a arguments

function myFunc(a,b,add){
    const data = a+b;
    add(data);
}
function myResult(value){
        
    console.log("Result is = ",value);

}
myFunc(12,25,myResult);