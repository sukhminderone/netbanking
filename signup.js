function createUsers(){


  var user1 = { "email":document.getElementById("emailid").value, "name":document.getElementById("name").value,"password":document.getElementById("password").value,currentAccountBalance:document.getElementById("currentAccountBalance").value,creditAccountBalance:document.getElementById("creditAccountBalance").value,"currentAccountSummary":[],"creditAccountSummary":[]};
  localStorage.setItem(document.getElementById("emailid").value, JSON.stringify(user1));
  console.log(localStorage);
  alert("signup successful");
  window.location.href = "index.html";




  // var retrievedObject = JSON.parse(localStorage.getItem('sukhminder@gmail.com'));
  // console.log('retrievedObject: ', retrievedObject);
  // console.log(retrievedObject["accountSummary"]);
  // retrievedObject["accountSummary"] = "data available";
  // console.log(retrievedObject["accountSummary"]);

}

function login() {

    window.location.href = "index.html";

}
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


}
}
else {
console.log("incorrect username,try again ")

alert("incorrect username");
  window.location.href = "index.html";

}


}
