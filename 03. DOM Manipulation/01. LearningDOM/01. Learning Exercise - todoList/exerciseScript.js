var buttonAdd = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var liId = 0;

function inputLen() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.append(addRemoveButton(liId));
    ul.appendChild(li);
    buttons();
    input.value = "";
}

function addRemoveButton() {
    var remButt = document.createElement("button");
    remButt.appendChild(document.createTextNode("remove"));
    remButt.id = liId;
    liId++;
    return remButt;
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

function removeElement() {
    // var item = document.getElementById("myLI");
    // item.parentNode.removeChild(item);
    console.log("hello");
}

function buttons() {
    butt = document.querySelectorAll("button");
    butt.forEach(but => {
        console.log("button id=", but.id);
        but.addEventListener('click', removeElement);
    })
}

buttonAdd.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterEnter)