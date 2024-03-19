/*sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides, 
 and it should print a summary of the sandwich that is being ordered. Call the function three times,
  using a different number of arguments each time.*/


  function make_sandwich (item:string[]) {
    console.log("\nMaking your sandwich with : ")
    item.forEach(element =>console.log(" * " + element));
    console.log("\nEnjoy your sandwich ! ") ;
  }

make_sandwich(['ketchup', 'cheese' , 'lettuce']) ;

make_sandwich(['peanut butter','bbq flavor chicken','chilli garlic']) ;

make_sandwich(['cream', 'mayo' , 'lettuce']) ;
