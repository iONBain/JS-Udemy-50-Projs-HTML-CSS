// JS coding
const boxes  = document.querySelectorAll(".box")

// checkBoxes();
function checkBoxes(){
    const triggerBtm = (window.innerHeight*.8)
    console.log(window.innerHeight*.8)
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop)
        if(boxTop<triggerBtm){
            box.classList.add("show")
        }
        else{
            box.classList.remove("show")
        }
    })
}


window.addEventListener("scroll", checkBoxes)
// boxes.addEventListener("scroll", () => {

// })