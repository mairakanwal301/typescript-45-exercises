// making guest list array for dinner..
var guest_list = ["maira", "zainab", "raza", "shahzain"];
for (var i = 0; i < guest_list.length; i++) {
}
// replacing a new guest because someone cannot come..
var unabletoattend = "raza";
var new_guest = "sara khan";
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
}
// adding a new guest at the begining index of array..
guest_list.unshift("ali");
// adding a new guest at the ending index of array..
guest_list.push("zona");
// making a variable to get middle index..
var middle_index = Math.floor(guest_list.length / 2);
//  adding a new guest at the middle index of array..
guest_list.splice(middle_index, 0, "ayesha");
//  print a invitation message to updated guest list..
guest_list.forEach(function (oneguest) { return console.log("My dear friend " + oneguest + "\nyou are invited at lalqila for dinner.\nThankyou\n"); });
//  print a message to informing that we have found bigger table..
console.log("good news for my more friends!  we have found a bigger dinner table thats why we invite more friends.");
var number_of_guest = guest_list.length;
console.log("we are inviting total ".concat(number_of_guest, " guest at lalqila for dinner"));
