let image = document.getElementById("img")
let play = document.getElementById("play_button")
let stop = document.getElementById("stop_button")
let arrowLeft = document.getElementById("arrow-left")
let arrowRight = document.getElementById("arrow-right")


let imageArr = ["pic1.jpg", "pic2.jpg", "pic3.jpg"]
let indexOfImageArr = 0


function carouselLoop(){
    let onLoop = true
    if(indexOfImageArr === imageArr.length-1){
        indexOfImageArr = 0
    }
    else{
        indexOfImageArr++
    }
    image.src = imageArr[indexOfImageArr]
    let timeoutId = setTimeout(carouselLoop, 2000)
    stop.addEventListener("click", function (){
        onLoop = false
        clearTimeout(timeoutId)
    })
    play.addEventListener("click", function (){
        if(!onLoop){
            onLoop = true
            carouselLoop()
        }
    })
}

carouselLoop()


arrowLeft.addEventListener("click", () => {
    if(indexOfImageArr === 0){
        indexOfImageArr = imageArr.length-1
    }
    else{
        indexOfImageArr--
    }
    image.src = imageArr[indexOfImageArr]
})

arrowRight.addEventListener("click", () => {
    if(indexOfImageArr === imageArr.length-1){
        indexOfImageArr = 0
    }
    else{
        indexOfImageArr++
    }
    image.src = imageArr[indexOfImageArr]
})