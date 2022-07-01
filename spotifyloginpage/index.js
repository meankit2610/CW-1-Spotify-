//document.querySelector("#five").addEventListener("click",login());
localStorage.setItem("email","12345@gmail.com")
localStorage.setItem("password","12345")
document.getElementById("six").addEventListener("click",signup);

function signup(){
    document.location.href = "../spotifysignup/index.html"
}
function login(){
   event.preventDefault()
   
    
    var email = (localStorage.getItem("email"))
    var password = (localStorage.getItem("password"))
    var email1 = document.getElementById("email").value
    var pass1 = document.getElementById("pass").value
    if(pass1===password&&email===email1){
        alert("login successful");
        document.location.href = "../dashboard.html"
    }
    else{
        alert("wrong details")
    }
}
   