// creat a guest list array..
let guest_list:string[] = ["maira","zainab","raza","shahzain"];
for(let i=0; i<guest_list.length; i++){

    // print guest list array
    console.log(` My dear friend ` +  guest_list[i] + `\nyou are invited at lalqila for dinner.\nThankyou\n`);
}
// replace a new guest beacuse someone cannot comee to dinner..
let unabletoattend:string =("raza");
let new_guest: string = ("sara khan");
guest_list[2]=new_guest;
for(let i=0; i<guest_list.length; i++){
    // print a new updated guestlist..
    console.log(` My dear friend ` +  guest_list[i] + `\nyou are invited at lalqila for dinner.\nThankyou\n`);
   
}
// print a guest name who will not come..
console.log(`Mr. ${unabletoattend}, will not Come`);

