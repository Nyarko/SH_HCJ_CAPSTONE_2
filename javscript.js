// navtoggler function

const primaryNav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    console.log(visibility);

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute('aria-expanded', false)
    }
});

//form validation function
function unameVal () {
    var name=document.formss.uname.value; 

    if (name == null || name == "") {
        
        
    } else {
        
    }
    
}
    var password=document.myform.password.value;
    
    var num=document.myform.num.value;  

    var firstpassword=document.f1.password.value;  
    var secondpassword=document.f1.password2.value;  
  
    if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
    }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    } else if (firstpassword==secondpassword) {
        return true;
        
    } else {
        alert("password must be same!");  
        return false; 
    }
    
        
        if (isNaN(num)){  
          document.getElementById("numloc").innerHTML="Enter Numeric value only";  
          return false;  
        }else{  
          return true;  
          }       


}

