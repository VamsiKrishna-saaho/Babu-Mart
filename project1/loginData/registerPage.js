document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    
    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

   
    if (registrations.some(registration => registration.username === username)) {
        alert("Username already exists. Please choose different one.");
        return;
    }

    
    registrations.push({ username: username, password: password });

    
    localStorage.setItem("registrations", JSON.stringify(registrations));

   
    window.location.href = "loginPage.html";
});


let btr=document.getElementById('btr1')
btr.onclick=function (){
    window.location.href="loginPage.html"
}