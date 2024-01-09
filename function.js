// prime number
function prime() {
    let s=[6,5,8,9,10,];
    console.log(s[0]);
   if (s[0]%2==0) {
    console.log("this is not prime");
    
   } else {
    console.log("this is prime");
   } 
 }
 prime();
 // most frequent item
 var arr=['a', 'b','c','a','e','a','a','b','c'];
 var count={};
 arr.forEach((val,index)=>{
    count[val]=(count[val]||0)+1;

 })
console.log(count) ;


// iterate from 0-15 and check whether even or odd
for (var i= 0; i <= 15; i++) {
    if (i === 0) {
        console.log(i + " is even");
    }
    else if (i % 2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log( i+ " is odd");
    }
} 
// square
function sum_sq(array) {
    var sum = 0;
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  console.log(sum_sq([1,2,3,4,5]));

  