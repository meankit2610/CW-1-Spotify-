document.querySelector("#signup").addEventListener("click", sign);
function sign(event) {


    event.preventDefault();




    var email = document.querySelector("#email").value;
    console.log(email)
    localStorage.setItem("email", email);
    var confirm = document.querySelector("#confirmemail").value;
    if (email !== confirm) {
        var p = document.createElement("p")
        p.innerText = "The email does not match"
        p.style.color = "red"
        document.querySelector("#emailnotsame").append(p)
        alert("Wrong details")
    }
    else {
        window.location.href = "../dashboard.html"
        alert("signup successful");
    }

    var password = document.querySelector("#createpassword").value;
    localStorage.setItem("password", password)
    var name = document.querySelector("#accountname").value
    localStorage.setItem("accountname", name)

   


}




