// object in jS
const person={
    name:"Amit",
    age:30,
    address:"Delhi"
};
console.log(person);
console.log(person.name);
// for(let key in person){
//     console.log(key +":"+person[key]);
// }

let key=Object.keys(person);
for(let i=0;i<key.length;i++){
    console.log(key[i]+"="+person[key[i]]);
}