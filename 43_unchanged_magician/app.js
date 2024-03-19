/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great()
with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array.
  Call show_magicians() with each array to show that you have one array of the original names
  and one array with the Great added to each magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians_names = ['Magician Ali', 'Magician Tony', 'Magician Babar', 'Magician Akbar'];
function show_magicians(magician_name) {
    for (var _i = 0, magicians_names_1 = magicians_names; _i < magicians_names_1.length; _i++) {
        var magician_name_1 = magicians_names_1[_i];
        console.log(magician_name_1);
    }
}
function make_great(magician_name) {
    for (var i = 0; i < magician_name.length; i++) {
        magicians_names[i] = ' The Great ' + magician_name[i];
    }
    return __spreadArray([], magicians_names, true);
}
console.log('This is my orignal array:');
show_magicians(magicians_names);
var copyArray = make_great(__spreadArray([], magicians_names, true));
console.log('This is my modified copy of the array:');
show_magicians(copyArray);
