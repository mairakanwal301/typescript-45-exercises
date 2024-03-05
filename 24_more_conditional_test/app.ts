// Equality and Unequality test with strings.
console.log("equality test with strings:", "apple" === "apple");
console.log("unequality test with strings:", "apple" !== "apple");

// test using lowercase function.
console.log("lowercase function test:", "zainab".toLowerCase() === "ZAINAB");
console.log("lowercase function test:" , "zainab".toLowerCase() === "zainab");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//  Numerical tests involving equality and inequality:
console.log("Numeric test invoving equality :" ,5 === 5 );
console.log("Numeric test invoving unequality :", 4 as number === 6 );
   
// greater than and less than:
console.log("greater than test:",20 < 15) ;
console.log("less than test:", 5 < 8);

//greater than or equal to, and less than or equal to:
console.log("greater than or equal to test:" ,  5 >= 10);
console.log("greater than or equal to:", 5 <= 10);
console.log("greater than or equal to:", 5 <= 5);

//  less than or equal to
console.log("less than or equal to:", 7 <= 7);
console.log("less than or equal:", 7 <= 10);
console.log("less than or equal to:", 7 >= 10) 

//  Tests using "and" operator..
  console.log("and operator test:", 7===7 && 3 < 6 );
  console.log("and operator test:" , 7===7 && 3 < 2);  // and operator me agr 1 value b false  or 1 true hogio ,to output  false aega.


//     Tests using "or" operator..
console.log("or operator test:", 7 === 7 || 4 < 8 );
console.log("or operator test:", 7===7 || 4 > 8)       // "or"operator me agr 1 value false hogi 1 true hogi, to output true he aega.
console.log("or operator test:", 7 !== 7  ||  6 < 3);

//  Test whether an item is in a array..

let fruits: string[] = ['apple', 'mango' , 'banana'] ;
// item in array..
console.log("test 'banana' in the array?" , fruits.includes('banana'));
console.log("test 'banana' in the array?" ,!fruits.includes('banana'));

//item is not in array..
console.log("test 'grapes' in th array?" , fruits.includes('grapes'));
console.log("test 'grapes' in th array?" , !fruits.includes('grapes'));






   