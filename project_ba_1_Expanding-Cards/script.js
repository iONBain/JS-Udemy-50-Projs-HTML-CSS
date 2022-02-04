// JS coding
const panels = document.querySelectorAll(".panel")





panels.forEach((panel) => {
    // console.log(panel);
    panel.addEventListener("click", () => {
        // console.log(panel)
        removeActive();
        panel.classList.add("active")

    })
})

function removeActive(){
    panels.forEach((panel)=> {
        panel.classList.remove("active")
    })
}