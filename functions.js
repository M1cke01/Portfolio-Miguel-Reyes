const words = ["Engineer", "Developer", "Programmer", "Full-Stack", "Creator"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed= 120;
const deleteSpeed = 60;

function typeLoop(){
    currentWord = words[i];
    
    if(!isDeleting) {
        document.getElementById("typewriter").textContent=currentWord.substring(0, j++);
        if(j>currentWord.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1000);
            return;
        }
    } else {
        document.getElementById("typewriter").textContent=currentWord.substring(0, j--);
        if(j<0){
            isDeleting=false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(typeLoop, isDeleting ? deleteSpeed : speed);
}

typeLoop();