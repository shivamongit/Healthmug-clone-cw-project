
//     var name =       document.getElementById("name")
//     var emailInput = document.getElementById("email");
//     var phoneInput = document.getElementById("mobile");
//     var radioFeedback =  document.form.feedback;
//     var radioSuggation = document.getElementById("rbsuggation");
//     var message =        document.getElementById("message");
//     var errormessage =   document.getElementById("errorMessage");

   
//     emailInput.addEventListener("input", emailChange );
//     phoneInput.addEventListener("input",validMobileCheck);
//     radioFeedbackInput.addEventListener("input",radioclickcheck);

// function emailChange(event) {
//     if(emailInput.indexOf('@') <= 0){

//     }
//     console.log(event.target.value)
// }
// function validMobileCheck(event) {
//     if(isNaN(event.target.value)){
//      event.target.value ="";
//     }
//     console.log(event.target.value)
// }
// function radioclickcheck(event) {
    
// }

function validation(event) {
  event.preventDefault();
    
        var name = document.contectus.name;
        var Email = document.contectus.email;
        var mobile = document.contectus.mobileNo;
        var feedback = document.contectus.feedback;
        var message = document.contectus.message;
        let isvalid = true
    
        if(name.value.length <=0){
            // alert("Name is required");
            name.focus();
            isvalid =  false;
            name.style.border  = '2px solid red';
        }
    
        if(Email.value.length <=0 ){
          // alert("Email is required");
          Email.focus();
          isvalid =  false;
          Email.style.border = '2px solid red'
        }  
        if(mobile.value.length <=0){
            // alert("Mobile is required");
            mobile.focus();
            isvalid =  false;
            mobile.style.border = 'solid 2px red'
        }

        if(message.value.length <= 0) {
          message.focus();
          isvalid = false
          message.style.border = 'solid 2px red'
        }
        if(feedback.value == ''){
          isvalid = false;
          // feedback.parentElement.style.border ='solid 2px red'
          alert('Invalid')
        }
        if (isvalid) {
          // set these values in local storage
          let messageDiv = document.getElementById('displayMessage');
          messageDiv.innerHTML = 'Hi ' + name.value + ' Thank you for reaching out to us. We will be back!'
          console.log(name.value, Email.value, mobile.value, feedback.value, message.value)
       }
        // return false
        // console.log(name, Email, mobile, feedback, message);


}

function validateString(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z ]+$/;
    if(!regExp.test(element.value)){
        // alert("Enter valid Name");
        element.style.border = "2px solid red"
       // element.focus();
        return false;
    } 
    element.style.border = "2px solid green";
}

var emailInput = document.getElementById("email");

// emailInput.addEventListener("onblur", emailvalidate );

function emailvalidate(event) {
  let valid = true;
  let emailInputValue = event.target.value;
  if(event.target.value.indexOf('@') <= 0){
      valid = false;
    // emailInput.style.border = "2px solid red"
       // element.focus();
        // return false;
    } 
    

    if(event.target.value.charAt(emailInputValue.length -4) != '.'){
      valid = false;
      // emailInput.style.border = "2px solid red"
         // element.focus();
          // return false;

    }
    // if(event.target.value.charAt(emailInputValue.length -1) != '.'){
    //   valid = false;
    //   // emailInput.style.border = "2px solid red"
    //      // element.focus();
    //       // return false;

    // }
    if(!valid) {
      emailInput.style.border = "2px solid red"
      // alert('Please enter valid email')
    } else {
      emailInput.style.border = "2px solid green";
    }
}
  



var phoneInput = document.getElementById("mobile");
// phoneInput.addEventListener("onblur",validMobileCheck);

phoneInput.addEventListener("input", clearText);

function clearText(event) {
  if(isNaN(event.target.value)){
    event.target.value ="";
   
   }
}


function validMobileCheck(event) {
  var phoneInputValue = event.target.value;
     
      let valid = true;
     if(event.target.value.length < 10){
       valid = false;
      

     }
     if(event.target.value.length > 10){
        valid = false;
     

     }
     if((phoneInputValue[0] != 9) && (phoneInputValue[0] != 8) && (phoneInputValue[0] != 7) && (phoneInputValue[0] != 6)){
      valid = false; 
     }
     if(valid){
        phoneInput.style.border = "2px solid green";
     }else{
        phoneInput.style.border = "2px solid red";
     }
  }

  var radioFeedbackInput = document.getElementById("rbsuggation");

  radioFeedbackInput.addEventListener("input",radioclickcheck);


  function radioclickcheck(event) {
    for(var i =0; i < radioFeedbackInput.length; i++ ){
      if(radioFeedbackInput[i].checked == true){
        alert("please select anyone");
        radioFeedbackInput.style.border = "2px solid red";
        return true
      }
      phoneInput.style.border = "2px solid green";
    }
    return false;
  };

//<div style="margin-top: 20px;" id='displayMessage'></div>

  