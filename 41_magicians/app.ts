/* Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */


const magicians_names: string [] = ['Magician Ali' , 'Magician Tony' ,'Magician Babar' , 'Magician Akbar'] ;

function  show_magicians( magician_name: string[] ){
    for(let magician_name of magicians_names){
    console.log(magician_name)
    }
    
}
   show_magicians(magicians_names) ;


