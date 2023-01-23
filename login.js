form = document.getElementById("form");


alldata= JSON.parse(localStorage.getItem("register"));
console.log(alldata);

form.addEventListener("submit", (Event)=>{
    Event.preventDefault();
        function check(data) {
            var flag=false;
            alldata.forEach((element,index) => {
                if(element.Email==form.loginid.value && form.otp.value==element.Password){
                    alert("login Successful")
                    flag = true;
                    localStorage.setItem("login_user",JSON.stringify(element));
                    window.location.replace("http://127.0.0.1:5501/halting-tendency-8264/index.html#")
                }
            });
            if(flag==false){
                alert("Username or Password is incorrect")
            }
        }
        check();
})