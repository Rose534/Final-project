//login page

const btn = document.getElementById("logButton")
const show = document.getElementById("leftbar")
const login = document.getElementById("login")



btn.addEventListener('click', () => { 
    login.style.display = "none"
    if (login.style.display === "none") {
        delete login;
    }
    
    
})