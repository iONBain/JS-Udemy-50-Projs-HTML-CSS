// JS coding
const loadText = document.querySelector(".loading")
const bg = document.querySelector(".bg")

let load = 0;

let int = setInterval(blurring,30)

function blurring(){
    load++;
    if(load>99){
        clearInterval(int)
    }

    loadText.textContent = `${load} %`
    let vall = (100-load)/100;
    let vall2 = Math.floor(((100-load)/100)*30)
    console.log(vall2)
    loadText.style.opacity = vall
    bg.style.filter = `blur(${vall2}px)`
    // console.log(load)
}