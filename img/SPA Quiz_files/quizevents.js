var CarLot = (function(eventz){
  eventz.buildEventz = function() {
    var carSquare = document.getElementsByClassName("cars");
    for (var i = 0; i < carSquare.length; i++) {
      carSquare[i].addEventListener("click", function (choice){
        var selected = choice.currentTarget;
        eventz.borderIt(selected);
        eventz.clearText();
      });
    };
    var userInputText = document.getElementById("user-input");
    userInputText.addEventListener("keydown", function(){
      CarLot.editText();
    });
  };
  return eventz;
}(CarLot || {}));



