var buttonAdd = document.getElementById("enter");
var input = document.getElementById("userInput");
var buttonRem = document.getElementById("remove");
var ul = document.querySelector("ul")

function inputLen() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLen() > 0) {
        createListElement();
    }    
}

function addListAfterEnter(e) {
    if (inputLen() > 0 && e.keyCode === 13) {
        createListElement();
    }
}

buttonAdd.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterEnter)