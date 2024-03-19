// Add an if test to Exercise 28 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed
var user_names = ['bugs bunny', 'admin', 'sylvester', 'tweety', 'duffy duck'];
if (user_names.length === 0) {
    console.log(" We need to find some users!");
}
else {
    user_names = [];
    console.log("  All users has been removed.  " + user_names.length);
}
