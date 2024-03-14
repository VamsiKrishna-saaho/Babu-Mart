document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

   
    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    
    let matchedRegistration = registrations.find(registration => registration.username === username && registration.password === password);

    if (matchedRegistration) {
        window.location.href = "http://127.0.0.1:5501/project1/index1.html";

        
    } else {
        alert("Invalid username or password!");
    }
});

let btr=document.getElementById("btr2")
btr.onclick=function (){
    window.location.href="registerPage.html"
}
