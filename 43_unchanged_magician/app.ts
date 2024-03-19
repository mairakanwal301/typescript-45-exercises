
/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() 
with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array.
  Call show_magicians() with each array to show that you have one array of the original names 
  and one array with the Great added to each magician’s name.*/

let magicians_names: string [] = ['Magician Ali' , 'Magician Tony' ,'Magician Babar' , 'Magician Akbar'] ;
 
function show_magicians(magician_name : string []){
    for(let magician_name of magicians_names){
        console.log(magician_name) ;
    }
}
  
function make_great(magician_name :string[] ){
    for(let i=0; i<magician_name.length; i++){
   magicians_names[i] = ' The Great '  + magician_name[i] ;
 
    }

 return[...magicians_names]
}  




console.log('This is my orignal array:') ;
show_magicians(magicians_names)  ;

let copyArray = make_great([...magicians_names]);

console.log('This is my modified copy of the array:');
show_magicians(copyArray)  ;