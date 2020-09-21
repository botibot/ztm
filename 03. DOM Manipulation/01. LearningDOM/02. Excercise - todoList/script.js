var buttonAdd = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLen() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.className = "itemGrid";
  markDone(li); // calls the funcion to have an event listener on the list item to be able to mark as done.
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

buttonAdd.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);

//lists all "li" elements.
function liElements() {
  liElements = document.querySelectorAll("li");
  return liElements;
}

//function to call the event listener on previos list elements. (the ones hardcoded on the the html file)
function markDonePrevious() {
  liElements = liElements();
  liElements.forEach((li) => {
    markDone(li);
    li.className = "itemGrid";
  });
}

//Call the function to add event listener on previous list items to toggle the .done class
markDonePrevious();

//Event listener fo the line inside the list, if its clicked, then it will toggle on or off the done class, to
//mark the item of the list.
function markDone(li) {
  li.addEventListener("click", function () {
    this.classList.toggle("done");
    liStatus = isDone(li);
    isListElementDone(liStatus, li);
  });
}

//checks weather the list item is done or not, returns a bolean.
function isDone(li) {
  if (li.classList.value === "itemGrid done") {
    return true;
  } else {
    return false;
  }
}

//Cehcks the status of the list element.
//1. If it's mark as done, adds the remove button.
//2. If the remove button exists and the element it's marked as not done then it removes the remove button.
function isListElementDone(liStatus, li) {
  if (liStatus === true && li.querySelector("button") === null) {
    addRemoveButton(li);
  } else if (liStatus === false && li.querySelector("button") !== null) {
    removeRemoveButton(li);
  }
}

//Ads the remove button to the list element and calls for the event listener of the button, so it can delete the
//list element if button is pressed.
function addRemoveButton(li) {
  var remButt = document.createElement("button");
  remButt.appendChild(document.createTextNode("remove"));
  removeElement(li, remButt);
  li.appendChild(remButt);
  remButt.className = "btn";
}

//Removes the remove button when the item of the list has been toggled as not done.
function removeRemoveButton(li) {
  asdr = li.querySelector("button");
  asdr.remove();
}

//Event listener to remove the list element when the button is pressed.
function removeElement(li, remButt) {
  remButt.addEventListener("click", function () {
    li.remove();
  });
}
