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
// arrow function with arguments  it is also a call back function
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

// anonymous function 

let myFun=function(value){
    console.log(value);
}
myFun("AEC College");

// object in jS
const person={
    name:"Amit",
    age:30,
    address:"Delhi"
};
console.log(person);
console.log(person.name);
for(let key in person){
    console.log(key +":"+person[key]);
}


