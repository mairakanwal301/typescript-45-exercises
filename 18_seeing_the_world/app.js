var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making an array of favourite visting countries..
var like_to_visit = ["turkey", "dubai", "maldives", "landon", "japan"];
//print an array in orignal order..
console.log("orignal order:", like_to_visit);
//print an array in alphabetic order without change your orignal array list..
console.log("alphabetical order:", __spreadArray([], like_to_visit, true).sort());
//print array is still in orignal order..
console.log("My array is still in orignal order:", like_to_visit);
//print an array in reverse alphabetical order without changing your orignal array list..
console.log("reverse alphabetical order:", __spreadArray([], like_to_visit, true).reverse());
//print array list is still in orignal order..
console.log("My array is in still orignal order:", like_to_visit);
//print array list in orignal order to reverse order now..            
console.log("reversed orignal array order:", like_to_visit.reverse());
// print back its orignal array list..
console.log("back to its orignal order:", like_to_visit.reverse());
//print an array to show that its order has been changed to alphabetical order..
console.log("sorted in alphabetic order:", like_to_visit.sort());
//print an array list in reverse alphabetical order now..
console.log("sorted in reverse alphabetical order:", like_to_visit.reverse());
