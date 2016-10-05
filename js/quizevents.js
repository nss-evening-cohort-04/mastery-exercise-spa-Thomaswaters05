//EVENTS - RETURN EVENTZ - Notes:

//CLEAR BUTTON WORKING


var CarLot = (function(eventz) {
    eventz.buildEventz = function() {
        var carSquare = document.getElementsByClassName("cars");
        for (var i = 0; i < carSquare.length; i++) {
            carSquare[i].addEventListener("click", function(choice) {
                var selected = choice.currentTarget;
                eventz.borderIt(selected);


                // console.log(CarLot); --> Good Ref Point to Jump Off For For Future
            });
        };
        var userInputText = document.getElementById("user-input");
        userInputText.addEventListener("keydown", function() {
            CarLot.editText();
            // console.log(userInputText);
            //console.log(checkingDueToGitIgnore)
        });
    };
    return eventz;
}(CarLot || {}));



