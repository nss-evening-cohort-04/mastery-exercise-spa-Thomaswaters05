//THIS IS HOW YOU DID IT IN WYSIWIG - NEC AND VARS?

// var editUserInput = document.getElementById("user-input").value;

var selectPoster = document.getElementsByClassName("selected");

var CarLot = (function(changeMe) {
    changeMe.editText = function() {
      var editUserInput = document.getElementById("user-input").value;
        if (selectPoster.length > 0) {
            var description = selectPoster[0].getElementsByClassName("para");
            description[0].innerHTML = editUserInput;
            // console.log(changeMe);
            // console.log(changeMe.editText);
        }
    };
    changeMe.borderIt = function(selected) {
        changeMe.noBorder();
        selected.classList.add("selected");
        // console.log(changeMe);
        }
    changeMe.autoFocus = function () {
        document.getElementById("user-input").focus();
        document.getElementById("user-input").value = "";
        //when you click on the car card- it will highlight. This function will make the
        // logic for the focus to auto sight the input field to make it easier for users to type
    };
    changeMe.noBorder = function() {
        var poster = document.getElementsByClassName("cars");
        for (var i = 0; i < poster.length; i++) {
            poster[i].classList.remove("selected");
            // console.log(changeMe.noBorder);
        }
    };
    return changeMe
})(CarLot || {});






