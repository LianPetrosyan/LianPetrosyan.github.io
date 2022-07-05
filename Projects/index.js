"use strict"

let container = document.getElementById('container');
const rowCount = 15;
const colCount = 10;

let activeEl = document.getElementsByClassName('active')
let frozenElements = Array.from(document.getElementsByClassName("frozen"))
let button = document.createElement("button")


function drawBoard() {
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.j = j;
            cell.dataset.i = i;
            container.append(cell);
        }
    }
}
drawBoard();

let figure =[
    [
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)-1}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)-1}"]`)
    ],
    [
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)-1}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)+1}"]`)
    ],
    [
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)-1}"]`),
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)-1}"]`),
        document.querySelector(`div[data-i="2"][data-j="${Math.floor(colCount/2)-1}"]`)
    ],
    [
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="2"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="3"][data-j="${Math.floor(colCount/2)}"]`)
    ],
    [
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)+1}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)-1}"]`)
    ]
]

let figureRotationFor2 = [
    [
        document.querySelector(`div[data-i="2"][data-j="${Math.floor(colCount/2)-1}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)-1}"]`),
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)}"]`)
    ],
    [
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)-1}"]`),
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)-1}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)-2}"]`)
    ],
    [
        document.querySelector(`div[data-i="2"][data-j="${Math.floor(colCount/2)}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)-1}"]`),
        document.querySelector(`div[data-i="0"][data-j="${Math.floor(colCount/2)-1}"]`),
        document.querySelector(`div[data-i="1"][data-j="${Math.floor(colCount/2)}"]`)
    ],

]
let index = 0
let colors = ["purple", "red", "blue", "green", "yellow"]
function randomColor(colors){
    return colors[Math.floor(Math.random()*colors.length)]
}

function countNextElData(arr){
    let nextEl = arr
    for(let x = 0; x < arr.length; x++){
        nextEl = document.querySelectorAll(`div[data-x='${+activeEl.forEach(el => el.dataset.i+1)}'][data-y='${+activeEl.forEach(el => el.dataset.j)}']`)
    }
    return nextEl
}

figure[Math.floor(Math.random()*figure.length)].forEach(el => {
    el.classList.add('active')
})

let freeze


function moveDown() {
    activeEl = document.getElementsByClassName('active');
    function createNextEl (activeEl){
        let nextEl = []
        for(let i = 0 ; i < activeEl.length ; i++){
            nextEl.push(document.querySelector(`div[data-i='${+activeEl[i].dataset.i+1}'][data-j='${+activeEl[i].dataset.j}']`))
        }return nextEl
    }
    let nextEl = createNextEl(activeEl)
    let timeoutId = setTimeout(moveDown, 1000)
    if([...activeEl].some(el=>el.dataset.i ==="0") && [...nextEl].some(el=>el.classList.contains("frozen"))){
        container.remove()
        let gameOver = document.createElement("h1")
        gameOver.classList.add("gameOver")
        gameOver.innerText = "Game over"
        button.innerText = "Try Again"
        button.classList.add("button")
        let end = document.createElement("div")
        end.classList.add("end")
        // end.append(gameOver)
        document.body.append(gameOver)
        button.addEventListener('click', ()=>{
            debugger
            end.remove()
            drawBoard()
            figure[Math.floor(Math.random()*figure.length)].forEach(el => {
                el.classList.add('active')
            })
            moveDown()
        })
    }
    if([...activeEl].some(el=>+el.dataset.i === rowCount-1) || [...nextEl].some(el=> el.classList.contains("frozen"))){
        freeze = Array.from(activeEl)
        freeze.forEach(el => {
            el.classList.add('frozen')
        })
        function deleteRows(){
            let allRows = new Set();
            [...freeze].every(el => allRows.add(el.dataset.i))
            for(let j = 0 ; j < allRows.length ; j++){
                debugger
                let neighbours = document.querySelectorAll(`div[data-j="${i}"]`)
                if([...freeze].every(el => el.dataset.i)){

                }
            }
        }
        freeze.forEach(el => {
            el.classList.remove('active')
        })
        activeEl = figure[Math.floor(Math.random()*figure.length)];
        [...activeEl].forEach(el => {
            el.classList.add('active')
        })
        moveDown()
    }
    else {
        [...activeEl].forEach(el => el.classList.remove('active')
        );
        [...nextEl].forEach(el => el.classList.add('active')
        );
    }
}

moveDown()



function nextElToLeft (activeEl){
    activeEl = [...activeEl]
    let nextEl = []
    for(let i = 0 ; i < activeEl.length ; i++){
        nextEl.push(document.querySelector(`div[data-i='${+activeEl[i].dataset.i}'][data-j='${+activeEl[i].dataset.j-1}']`))
    }return nextEl
}
function nextElToRight (activeEl) {
    let nextEl = []
    for (let i = 0; i < activeEl.length; i++) {
        nextEl.push(document.querySelector(`div[data-i='${+activeEl[i].dataset.i}'][data-j='${+activeEl[i].dataset.j + 1}']`))
    }
    return nextEl
}

function moveLeft(){
    const activeEl = document.getElementsByClassName('active')
    if([...activeEl].every(el => +el.dataset.j-1 >= 0)){
        let nextEl = nextElToLeft(activeEl);
        [...activeEl].forEach(el => el.classList.remove('active'))
        nextEl.forEach(el => el.classList.add('active'))
    }
}

function moveRight(){
    let activeEl = document.getElementsByClassName('active');
    if([...activeEl].every(el => +el.dataset.j+1 < colCount)){
        let nextEl = nextElToRight(activeEl);
        [...activeEl].forEach(el => el.classList.remove('active'))
        nextEl.forEach(el => el.classList.add('active'))
    }
}

// function isFulled(){
//     let freeze = document.getElementsByClassName("frozen")
//     for(let i = 0 ; i < colCount; i++) {
//         let rows = []
//         let neighbours = document.querySelectorAll(`div[data-i='${+[...activeEl].every(el => el.dataset.i)}']`)
//         if(!neighbours[i].classList.contains("frozen")){
//             break
//         }
//         else{
//             console.log("yey")
//         }
//     }
// }



window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            moveDown();
        } else if (e.key === 'ArrowLeft') {
            moveLeft()
        } else if (e.key === 'ArrowRight') {
            moveRight()
        }
    }
)
