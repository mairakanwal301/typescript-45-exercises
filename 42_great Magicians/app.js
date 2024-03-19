"use strict";
/* Start with a copy of your program from Exercise 41. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified */
const magicians_names = ['Magician Ali', 'Magician Tony', 'Magician Babar', 'Magician Akbar'];
function make_great(magician_name) {
    for (let i = 0; i < magician_name.length; i++) {
        magicians_names[i] = " The Great " + magician_name[i];
    }
}
function show_magicians(magician_name) {
    for (let magician_name of magicians_names) {
        console.log(magician_name);
    }
}
make_great(magicians_names);
show_magicians(magicians_names);
