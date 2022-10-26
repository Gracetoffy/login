var email = document.getElementById('email');
var submit = document.getElementById('submit');
var userName= document.getElementById('userName');
var DOB =document.getElementById('DOB');
var color = document.getElementById('color');
var password = document.getElementById('password');
var result = document.getElementById("result");
var  resultName =document.querySelectorAll('.name');
var resultColor =document.querySelectorAll('.color');
var resultEmail = document.querySelectorAll('.email');
var resultPassword =document.querySelectorAll('.password');
var resultDOB =document.querySelectorAll('.dob');
var closeResult = document.getElementById('close');


closeResult.addEventListener('click',()=>{
    result.style.display="none";
})

submit.addEventListener('click',()=>{
   result.style.display="block";
   for(var i=0 ;i<resultName.length;i++){
    resultName[i].innerHTML=userName.value;
   }
 for(var i=0 ; i< resultEmail.length ; i++){
    resultEmail[i].innerHTML = email.value;
   }
   
   for(var i=0 ; i< resultColor.length ; i++){
    resultColor[i].innerHTML = color.value;
    result.style.color =color.value
   }

   for(var i=0 ; i< resultPassword.length ; i++){
    resultPassword[i].innerHTML = password.value;
   }

   for(var i=0 ; i< resultDOB.length ; i++){
    resultDOB[i].innerHTML =DOB.value;

   }


   console.log(color.value)
    console.log(email.value);
    console.log(userName.value);
    console.log(DOB.value);
})