//login page

const btn = document.getElementById("logButton")
const show = document.getElementById("leftbar")
const login = document.getElementById("login")



btn.addEventListener('click', (e) => { 
    login.style.display = "none"
    e.preventDefault();
     
   
})