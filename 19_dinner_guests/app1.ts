// making guest list array for dinner..
let guest_list:string[] = ["maira","zainab","raza","shahzain"];
for(let i=0; i<guest_list.length; i++){
    
}
// replacing a new guest because someone cannot come..
let unabletoattend: string = "raza";
let new_guest: string = "sara khan";
guest_list[2]=new_guest;
for(let i=0; i<guest_list.length; i++){

}
// adding a new guest at the begining index of array..
guest_list.unshift("ali");

// adding a new guest at the ending index of array..
guest_list.push("zona");

// making a variable to get middle index..
let middle_index:number = Math.floor(guest_list.length / 2);

//  adding a new guest at the middle index of array..
guest_list.splice(middle_index, 0, "ayesha");


//  print a invitation message to updated guest list..
   guest_list.forEach(oneguest => console.log(`My dear friend ` + oneguest + `\nyou are invited at lalqila for dinner.\nThankyou\n`));  
   
//  print a message to informing that we have found bigger table..
    console.log("good news for my more friends!  we have found a bigger dinner table thats why we invite more friends." );

// program of exercise 19..
    let number_of_guest:number = guest_list.length;
    console.log(`we are inviting total ${number_of_guest} guest at lalqila for dinner`);



