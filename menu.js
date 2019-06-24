console.log("getting data .....");
console.log(JSON.parse(localStorage.getItem("username")));
var userKey = JSON.parse(localStorage.getItem("username"));
var userData = JSON.parse(localStorage.getItem(userKey));
var name = userData["name"];
var username = userData["email"];
function var1() {
document.getElementById('heading').innerHTML = "Welcome "+ name;

}
function redirectToAccount(){

  
    window.location.href = "account.html";
}
window.onload = var1;
