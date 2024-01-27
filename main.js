const login = ()=>{
    if(usernameInput.value=="" || pswdInput.value==""){
    alert("Please fill the form completely!!!")
    }else{
          user = usernameInput.value
          localStorage.setItem("user",user)
        //  redirect to dashboard
        window.location = "home.html"
        alert("Login Successfull!!!")
    }
}