// let array = [1, 2, 3, 4, 5];

// for(let i = array.length-1; i>=0; i-- ) {
//     console.log(array[i]);
// }

// Six variables are give as per the following details:
// a=5
// b=7
// c=90
// d=60
// e=20
// f=10
// Find the value of equation 2x+5y+10*z, where:
// x= a raised to the power of b.
// y= sum of c and e.
// z= product of d and f.

// a=5
// b=7
// c=90
// d=60
// e=20
// f=10

// let sum = 2*(a**b) + 5*(c+e) + 10*(d*f);
// console.log(sum);

// let num = 1234567890123456789012n;
// let result = num * BigInt(1000);
// console.log(result + " " + typeof(result));

// let nums = [1,2,3,4,5,6,7,8,9,10];

// odd = nums.filter(eachNum => {
//     return (eachNum % 2) != 0;
// });

// console.log(odd);

function hobbies(name, period) {
  this.name = name;
  this.period = period;
}

let kid = new hobbies("cricket", "all");
let teen = new hobbies("piano", "teen");

console.log(kid);
console.log(teen);
