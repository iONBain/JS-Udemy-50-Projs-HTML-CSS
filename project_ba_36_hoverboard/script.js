// JS coding
const container = document.getElementById("container")
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71", "#c3efc21", "#af2f23" ]

const SQUARES = 500

for(let i=0; i<SQUARES; i++){
    const square = document.createElement("div")
    square.classList.add("square")
    container.appendChild(square)


    square.addEventListener("mouseover", ()=>setColor(square))
    square.addEventListener("mouseout", ()=>removeColor(square))
}

function setColor(element){
    // console.log(element)
    const color = getRandomColor(); 
    element.style.background =color
    element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    console.log(123)
    element.style.background = "#1d1d1d"
    element.style.boxShadow = "none"
}


function getRandomColor(){
    let temp =  Math.floor(Math.random()*colors.length)
    return colors[temp];
}