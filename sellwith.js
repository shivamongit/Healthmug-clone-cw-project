function validation(event) {
    event.preventDefault();
         var cName = document.sellWith.companyName
          var name = document.sellWith.name;
          var state = document.sellWith.stateslection;
          var mobile = document.sellWith.phone;
          var cType = document.sellWith.companyType;
          var Email = document.sellWith.email;
          var city = document.sellWith.city;
           var timeContact = document.sellWith.timeContact
         
          let isvalid = true
      
          if(cName.value.length <=0){
              // alert("Name is required");
              cName.focus();
              isvalid =  false;
              cName.style.border  = '2px solid red';
          }
          if(name.value.length <=0){
            // alert("Name is required");
            name.focus();
            isvalid =  false;
            name.style.border  = '2px solid red';
        }
        if(state.value.length <=0){
            // alert("Name is required");
            state.focus();
            isvalid =  false;
            state.style.border  = '2px solid red';
        }
       
        if(mobile.value.length <=0){
            // alert("Mobile is required");
            mobile.focus();
            isvalid =  false;
            mobile.style.border = 'solid 2px red'
        }
        if(cType.value.length <=0){
            // alert("Name is required");
            cType.focus();
            isvalid =  false;
            cType.style.border  = '2px solid red';
        }
      
          if(Email.value.length <=0 ){
            // alert("Email is required");
            Email.focus();
            isvalid =  false;
            Email.style.border = '2px solid red'
          }  
         
  
          if(city.value.length <= 0) {
            city.focus();
            isvalid = false
            city.style.border = 'solid 2px red'
          }
          if(timeContact.value == ''){
            isvalid = false;
            alert('Invalid')
          }
         
          
  
  
  }