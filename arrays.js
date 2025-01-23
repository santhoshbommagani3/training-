let userDetails={
    name:"Santhosh",
    age:19,
    city:"Hyderabad"
}
console.log(userDetails);
console.log(userDetails.name);
console.log(typeof(userDetails));

let x=JSON.stringify(userDetails);
console.log(x);
console.log(x.name);
console.log(typeof(x));

let y=JSON.parse(x);
console.log(y);