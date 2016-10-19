var CarLot = (function(changeMe) {
   changeMe.editText = function() {
    var editUserInput = document.getElementById("user-input").value;
    var selectPoster = document.getElementsByClassName("selected")
    if (selectPoster.length > 0) {
      var description = selectPoster[0].getElementsByClassName("para");
      description[0].innerHTML = editUserInput;
    }
  };
  changeMe.borderIt = function(selected) {
    changeMe.noBorder();
    selected.classList.add("selected");
  };
changeMe.noBorder = function() {
    var poster = document.getElementsByClassName("cars");
    for (var i = 0; i < poster.length; i++) {
       poster[i].classList.remove("selected");
     }
  };
  changeMe.clearText = function () {
    document.getElementById("user-input").value = "";
  }
  return changeMe
})(CarLot || {});






