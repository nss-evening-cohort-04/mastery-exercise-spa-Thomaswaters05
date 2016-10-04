var CarLot = (function(changeMe) {

  };
  changeMe.editText = function() {
    var editUserInput = document.getElementById("user-input").value;
    var selectPoster = document.getElementsByClassName("selected")
    if (selectPoster.length > 0) {
      var description = selectPoster[0].getElementsByClassName("para");
      description[0].innerHTML = editUserInput;
    }
  };
  changeMe.clearText = function () {
    document.getElementById("user-input").value = "";
  }
  return changeMe
})(CarLot || {});






