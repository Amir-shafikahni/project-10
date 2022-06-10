let $ = document

/////////////////////

let body = $.body
let contexMenu = $.querySelector(".contexMenu")


body.addEventListener("contextmenu" , function(event){
    event.preventDefault()
    contexMenu.style.display = "block"
    contexMenu.style.left = event.pageX +"px" 
    contexMenu.style.top = event.pageY + "px"
})

body.addEventListener("click" , function(event){
    contexMenu.style.display = "none"
})

body.addEventListener("keydown",  function(event){
    if(event.key === "Escape"){
        contexMenu.style.display = "none"
    }
})