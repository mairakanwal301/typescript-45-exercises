//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var aliens_color = "green";
//If the alien is green, print a message that the player earned 5 points.
if (aliens_color === "green") {
    console.log(" player earned 5 points.");
    //If the alien is yellow, print a message that the player earned 10 points.
}
else if (aliens_color === "yellow") {
    console.log(" player earned 10 points.");
    //If the alien is red, print a message that the player earned 15 points.
}
else if (aliens_color === "red") {
    console.log(" player earned 15 points.");
}
else {
    console.log("please select right color.");
}
//version 1 of program..
aliens_color = "green";
if (aliens_color === "green") {
    console.log("version 1: player earned 5 points.");
}
else if (aliens_color === "yellow") {
    console.log(" player earned 10 points.");
}
else if (aliens_color === "red") {
    console.log(" player earned 15 points.");
}
else {
    console.log("please select right color.");
}
//version 2 of program..
aliens_color = "yellow";
if (aliens_color === "green") {
    console.log(" player earned 5 points.");
}
else if (aliens_color === "yellow") {
    console.log("version 2: player earned 10 points.");
}
else if (aliens_color === "red") {
    console.log(" player earned 15 points.");
}
else {
    console.log("please select right color.");
}
//version 3 of program..
aliens_color = "red";
if (aliens_color === "green") {
    console.log(" player earned 5 points.");
}
else if (aliens_color === "yellow") {
    console.log(" player earned 10 points.");
}
else if (aliens_color === "red") {
    console.log("version 3 player earned 15 points.");
}
else {
    console.log("please select right color.");
}
