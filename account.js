// var queryString = decodeURIComponent(window.location.search);
// queryString = queryString.substring(1);
// var queries = queryString.split("&");
// for (var i = 0; i < queries.length; i++)
// {
// console.log("getting data .....");
// console.log(queries[i]);
// }
 console.log("getting data .....");
 console.log(JSON.parse(localStorage.getItem("username")));
 var userKey = JSON.parse(localStorage.getItem("username"));
 var userData = JSON.parse(localStorage.getItem(userKey));
 var name = userData["name"];
  var userEmail = userData["email"];
 var currentAccountBalance = userData["currentAccountBalance"];
  var creditAccountBalance = userData["creditAccountBalance"];
  console.log("current account balanced saved in ls is "+ currentAccountBalance);
    console.log("credit account balanced saved in ls is "+ creditAccountBalance);
function var1() {
document.getElementById('heading').innerHTML = "Welcome "+ name;

}

window.onload = var1;




function jsFunction(value)
{
   if(value == "currentAccount"){
     document.getElementById("currentBalance").innerHTML = "current account balance is = "+ currentAccountBalance;
     console.log("show me");
   }
   else
   {
      document.getElementById("currentBalance").innerHTML = "credit account balance is ="+ creditAccountBalance;
   }
}




function transferFund(){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


 var selectedIndex1 = myForm.elements["fromAccount"].selectedIndex;
      var transferFrom = myForm.elements["fromAccount"].options[selectedIndex1].value;
      var selectedIndex2 = myForm.elements["toAccount"].selectedIndex;
           var transferTo = myForm.elements["toAccount"].options[selectedIndex2].value;



          var amountToTransfer= parseInt( document.getElementById('amountTransferred').value);
          console.log("amount to transfer "+ amountToTransfer);
  var otherUserEmail=  document.getElementById('email').value;

  if(localStorage.hasOwnProperty(otherUserEmail)){

    console.log("user exist in local storage");
   if(otherUserEmail == userEmail){
     alert("you can't enter your own email");

   }
   else{
     // main logic
     console.log("successfull email")
     console.log("transfer function called.....");
         if(transferFrom == "currentAccount" && transferTo =="creditAccount"){
           if(amountToTransfer<=currentAccountBalance  && amountToTransfer>0){
             console.log("transfer is possible from current to credit");
             var remainingBalance = currentAccountBalance - amountToTransfer;
             userData["currentAccountBalance"] = remainingBalance;
             localStorage.setItem(userEmail, JSON.stringify(userData));
              var otherUserData = JSON.parse(localStorage.getItem(otherUserEmail));
              otherUserData["creditAccountBalance"] = otherUserData["creditAccountBalance"] + amountToTransfer;
              localStorage.setItem(otherUserEmail, JSON.stringify(otherUserData));
              document.getElementById("remainingBalance").innerHTML = "your remaining balance is = "+ remainingBalance;
            var summary1 = [date,"money transferred to "+ otherUserData["name"],"$"+amountToTransfer.toString(),"$0","$"+remainingBalance];
            userData["currentAccountSummary"].push(summary1);
            localStorage.setItem(userEmail, JSON.stringify(userData));
            console.log("testing........");

            var summary2 = [date,"Received from "+ userData["name"],"$0","$"+amountToTransfer.toString(),"$"+otherUserData["creditAccountBalance"]];
            otherUserData["creditAccountSummary"].push(summary2);
            // console.log(currentAccountSummary2);
            // console.log("other user email is "+otherUserData["email"]);
            localStorage.setItem(otherUserData["email"], JSON.stringify(otherUserData));
            alert("fund transfer successfully");
            window.location.href= "account.html";



           }
           else{
             alert("This operation is not allowed")
             console.log("transfer not possible from current to credit");
           }
         }

     //          var remainingBalance = currentAccountBalance - amountToTransfer;
     //         userData["currentAccountBalance"]=userdata["currentAccountBalance"]+amountToTransfer;
     //         userdata["savingAccountBalance"]=remainingBalance;
     //       document.getElementById("remainingBalance").innerHTML = "your remaining balance is = "+ remainingBalance;
     // document.getElementById("currentBalance").innerHTML = "current balance is ="+ userdata["currentAccountBalance"];

          else if(transferFrom == "creditAccount" && transferTo =="currentAccount"){
            if(amountToTransfer<=creditAccountBalance && amountToTransfer>0){
               console.log("transfer is possible from credit to current");

               var remainingBalance = creditAccountBalance - amountToTransfer;
               userData["creditAccountBalance"] = remainingBalance;
               localStorage.setItem(userEmail, JSON.stringify(userData));
                var otherUserData = JSON.parse(localStorage.getItem(otherUserEmail));
                otherUserData["currentAccountBalance"] = otherUserData["currentAccountBalance"] + amountToTransfer;
                localStorage.setItem(otherUserEmail, JSON.stringify(otherUserData));
                document.getElementById("remainingBalance").innerHTML = "your remaining balance is = "+ remainingBalance;

                var summary3 = [date,"money transferred to "+ otherUserData["name"],"$"+amountToTransfer.toString(),"$0","$"+remainingBalance];
                userData["creditAccountSummary"].push(summary3);
                localStorage.setItem(userEmail, JSON.stringify(userData));
                console.log("testing........");

                var summary4 = [date,"Received from "+ userData["name"],"$0","$"+amountToTransfer.toString(),"$"+otherUserData["currentAccountBalance"]];
                otherUserData["currentAccountSummary"].push(summary4);
                // console.log(currentAccountSummary2);
                // console.log("other user email is "+otherUserData["email"]);
                localStorage.setItem(otherUserData["email"], JSON.stringify(otherUserData));
                alert("fund transfer successfull");
                window.location.href= "account.html";

            }
          else
          {
            alert("This operation is not allowed");
            console.log("transfer is not possible from credit to current");
          }
         //
         //   var remainingBalance = userdata["currentAccountBalance"]- amountToTransfer;
         //             userdata["savingAccountBalance"]=userdata["savingAccountBalance"]+amountToTransfer;
         //               userdata["currentAccountBalance"]=remainingBalance;
         // document.getElementById("remainingBalance").innerHTML = "your remaining balance is ="+ remainingBalance;
         // document.getElementById("currentBalance").innerHTML = "current balance is ="+ userdata["savingAccountBalance"];
       } // ist else if end

         else if(transferFrom == "currentAccount" && transferTo =="currentAccount"){
           if(amountToTransfer<=currentAccountBalance  && amountToTransfer>0){
              console.log("transfer is possible from current to current");
              var remainingBalance = currentAccountBalance - amountToTransfer;
              userData["currentAccountBalance"] = remainingBalance;
              localStorage.setItem(userEmail, JSON.stringify(userData));
               var otherUserData = JSON.parse(localStorage.getItem(otherUserEmail));
               otherUserData["currentAccountBalance"] = otherUserData["currentAccountBalance"] + amountToTransfer;
               localStorage.setItem(otherUserEmail, JSON.stringify(otherUserData));
               document.getElementById("remainingBalance").innerHTML = "your remaining balance is = "+ remainingBalance;

               var summary5 = [date,"money transferred to "+ otherUserData["name"],"$"+amountToTransfer.toString(),"$0","$"+remainingBalance];
               userData["currentAccountSummary"].push(summary5);
               localStorage.setItem(userEmail, JSON.stringify(userData));
               console.log("testing........");

               var summary6 = [date,"Received from "+ userData["name"],"$0","$"+amountToTransfer.toString(),"$"+otherUserData["currentAccountBalance"]];
               otherUserData["currentAccountSummary"].push(summary6);
               // console.log(currentAccountSummary2);
               // console.log("other user email is "+otherUserData["email"]);
               localStorage.setItem(otherUserData["email"], JSON.stringify(otherUserData));
               alert("fund transfer successfull");
               window.location.href= "account.html";

           }
         else
         {
           alert("This operation is not allowed");
           console.log("transfer is not possible from current to current");
         }

       } // second if else end

         else if(transferFrom == "creditAccount" && transferTo =="creditAccount"){
           if(amountToTransfer<=creditAccountBalance  && amountToTransfer>0){
              console.log("transfer is possible from credit to creditt");

              var remainingBalance = creditAccountBalance - amountToTransfer;
              userData["creditAccountBalance"] = remainingBalance;
              localStorage.setItem(userEmail, JSON.stringify(userData));
               var otherUserData = JSON.parse(localStorage.getItem(otherUserEmail));
               otherUserData["creditAccountBalance"] = otherUserData["creditAccountBalance"] + amountToTransfer;
               localStorage.setItem(otherUserEmail, JSON.stringify(otherUserData));
               document.getElementById("remainingBalance").innerHTML = "your remaining balance is = "+ remainingBalance;

               var summary7 = [date,"money transferred to "+ otherUserData["name"],"$"+amountToTransfer.toString(),"$0","$"+remainingBalance];
               userData["creditAccountSummary"].push(summary7);
               localStorage.setItem(userEmail, JSON.stringify(userData));
               console.log("testing........");

               var summary8 = [date,"Received from "+ userData["name"],"$0","$"+amountToTransfer.toString(),"$"+otherUserData["creditAccountBalance"]];
               otherUserData["creditAccountSummary"].push(summary8);
               // console.log(currentAccountSummary2);
               // console.log("other user email is "+otherUserData["email"]);
               localStorage.setItem(otherUserData["email"], JSON.stringify(otherUserData));
               alert("fund transfer successfull");
               window.location.href= "account.html";



           }
         else
         {
           alert("This operation is not allowed");
           console.log("transfer is not possible from credit to credit");
         }

       }// third if else ends
         else{
           alert("this opeartion is not allowed");
         }
   } // main logic end here

 } // local storage if braces closed

  else{
    alert("user does'nt exist");
console.log("there is no user with the entered email address, please enter valid email id");

  }





} // function ends here
