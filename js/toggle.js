const toggle = document.querySelector('.toggle');
const ball = document.querySelector('.ball');

toggle.addEventListener("click",()=>{
    ball.classList.toggle("ball--active");
}  )