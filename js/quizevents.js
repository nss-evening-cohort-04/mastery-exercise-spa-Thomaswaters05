// inventory = famousContainer
// var editTheLot = document.getElementById("car-spot").addEventListener("click", editCard);


var userInput = document.getElementById("user-input");
var targetToHighlight = document.getElementsByClassName("cars");
var carzLot = '';

function editCard() {
  for (var i = 0; i < targetToHighlight.length; i++) {
    if (targetToHighlight.item(i).classList.contains("selected")) {
      targetToHighlight.item(i).classList.remove("selected");
    }
}

var currentCard = document.getElementById(this.id);
currentCard.classList.add("selected");
carzLot = this.id.replace("display-", "");
userInput.focus();
userInput.value = '';

}

for (var i = 0; i < targetToHighlight.length; i++) {
  targetToHighlight.item(i).addEventListener("click", editCard);
}

function editDescription (userInput) {
  document.getElementById(carzLot).innerHTML = userInput;
  console.log(carzLot);
}

userInput.addEventListener("keyup", function(){
  editDescription(userInput.value);
});