// JS coding
const progress = document.querySelector("#progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

let current = 1;
next.addEventListener("click", () => {
    current++;

    if (current > circles.length) {
        current = circles.length;
    }
    console.log(current)
    update();
})

prev.addEventListener("click", () => {
    current--;

    if (current < 1) {
        current = 1;
    }
    console.log(current)
    update();
})

function update(){
    circles.forEach((circle,idx) => {
        if(idx<current ){
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active");
    const total = circles.length;
    const percentage = (actives.length-1)/(total-1) * 100;
    progress.style.width = percentage + '%'


    if(current===1){
        prev.disabled = true;
    }
    else if(current===circles.length){
        next.disabled =  true; 
      }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}