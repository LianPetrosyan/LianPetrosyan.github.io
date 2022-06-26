let button = document.getElementById('button')
let input = document.getElementById('input');
let body = document.getElementsByTagName('body');
let ul = document.getElementById("list")

function creatingElement(){
    if(input.value === ""){
        alert("Please add an activity")
    }
    else {
        let toDoItem = document.createElement("li")
        toDoItem.classList.add("createdListItem")
        toDoItem.append(input.value)
        toDoItem.addEventListener("click", function (){
            toDoItem.classList.toggle("createdListItemToggle")
        })

        let removeButton = document.createElement("button");
        removeButton.classList.add("removeButton")
        removeButton.append("x")
        removeButton.addEventListener("click", function () {
            toDoItem.remove()
        })
        toDoItem.appendChild(removeButton)
        ul.appendChild(toDoItem);
        input.value = ""
    }
}


button.addEventListener("click", creatingElement)

