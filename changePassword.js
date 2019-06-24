function changePassword(){
    var username = document.getElementById('username').value;
  var oldPasswordEntered = document.getElementById('oldEnteredPassword').value;
  var newEnteredPassword  = document.getElementById('newEnteredPassword').value;
  var repeatedPassword  = document.getElementById('repeatedPassword').value;
  console.log(username);
  console.log(oldPasswordEntered);
  console.log(newEnteredPassword);
  console.log(repeatedPassword);
  if(newEnteredPassword != repeatedPassword){
    alert("both password fields should match");
  }
  if(localStorage.hasOwnProperty(username)){

      var retrievedObject = JSON.parse(localStorage.getItem(username));
      var oldPasswordSaved = retrievedObject["password"];
      console.log(oldPasswordSaved);

      if(oldPasswordSaved == oldPasswordEntered){
        retrievedObject["password"] = newEnteredPassword;
        console.log("checking changed password");
        console.log(retrievedObject["password"]);
localStorage.setItem(username, JSON.stringify(retrievedObject));
alert("password changed successfully, please login with new password to continue");
  window.location.href = "index.html";
      }
      else{
        alert("the old password you entered is incorrect")
      }
  }
  else {
    alert("username does not exist");
  }
}
