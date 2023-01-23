form = document.getElementById("form");
userdata=[];

form.addEventListener("submit", (Event)=>{
    Event.preventDefault()
    if(form.password.value==form.cnfpassword.value){
        alert("Register Sucessful");
        data = {
            Name:form.name.value,
            Number:form.number.value,
            City:form.city.value,
            Pincode:form.pincode.value,
            Email:form.email.value,
            Password:form.password.value
        }
        userdata.push(data)
        localStorage.setItem("register", JSON.stringify(userdata));
        window.location.replace("http://127.0.0.1:5501/halting-tendency-8264/login.html")
    }else{
        alert("Check Your Password")
    }
})