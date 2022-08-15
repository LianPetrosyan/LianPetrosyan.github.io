let toDo = document.getElementById('to-do')
let carousel = document.getElementById('carousel')
let starWars = document.getElementById('star-wars')

toDo.addEventListener("click", function(){
    document.location.href = "./To Do/To do.html"
})

carousel.addEventListener("click", function(){
    document.location.href = "./Carousel/Carousel.html"
})

starWars.addEventListener("click", function(){
    document.location.href = "./Star Wars/star-wars.html"
})
