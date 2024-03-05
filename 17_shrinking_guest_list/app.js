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
//  informing that only two guests can be come because we cant arrange bigger table on time..
console.log("unfortunately! we cant arrange bigger table on time so,thatswhy only two guests are allowed");
//  using while loop to remove guest from array until only two name remains..
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("sorry,".concat(removed_guest, " you are not invited for dinner"));
}
// printing invitation message of two last guests..
console.log("invitation to last two guests");
guest_list.forEach(function (lasttwo) { return console.log("goodluck! ".concat(lasttwo, ", you ae still invited for dinner.")); });
//removing last two guest also from array..
guest_list.pop();
guest_list.pop();
console.log("empty list", guest_list);
