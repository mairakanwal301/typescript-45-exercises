var guest_list = ["maira", "zainab", "raza", "shahzain"];
for (var i = 0; i < guest_list.length; i++) {
}
var unabletoattend = "raza";
var new_guest = "sara khan";
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
}
guest_list.unshift("ali");
guest_list.push("zona");
var middle_index = Math.floor(guest_list.length / 2);
guest_list.splice(middle_index, 0, "ayesha");
guest_list.forEach(function (oneguest) { return console.log("My dear friend " + oneguest + "\nyou are invited at lalqila for dinner.\nThankyou\n"); });
console.log("good news for my more friends!  we have found a bigger dinner table thats why we invite more friends.");
