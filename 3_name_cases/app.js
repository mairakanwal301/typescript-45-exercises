//  step 1: lowercase
var personName = "maira";
console.log("lowercase:", personName.toLowerCase());
//  step 2: uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
//  step 3: titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
