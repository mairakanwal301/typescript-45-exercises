//  step 1: lowercase
let personName: string = "Maira Kanwal";
 console.log("lowercase:", personName.toLowerCase());

//  step 2: uppercase
 console.log("uppercase:", personName.toLocaleUpperCase());

//  step 3: titlecase
 console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));


