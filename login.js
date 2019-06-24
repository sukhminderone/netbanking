
function authenticate() {


var username = document.getElementById('username').value;
var enteredPassword = document.getElementById('password').value;
console.log("entered password"+enteredPassword);

console.log(username);
console.log("checking....");
if(localStorage.hasOwnProperty(username)){
  var retrievedObject = JSON.parse(localStorage.getItem(username));
   var  actualPassword = retrievedObject["password"];
   console.log("actual password is "+ actualPassword);
  if(enteredPassword.toString() == actualPassword) {
console.log("login successful");
alert("login successful");
console.log("sending data to account.js page");
localStorage.setItem('username',JSON.stringify( username));
  window.location.href = "menu.html";



}
else{
  alert("incorrect password, try again");
    window.location.href = "index.html";

}
}
else {
console.log("incorrect username,try again ")

alert("incorrect username");
  window.location.href = "index.html";

}


}
