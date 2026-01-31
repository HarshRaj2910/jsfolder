let a=[1,2,3];
a.push(4,5);
console.log(a);

let c=[a,10];
console.log(c);   // nested array

let d=[...a,12];  
console.log(d);  // The spread operator ...a copies each element of a into d