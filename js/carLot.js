var CarLot = (function () {
  var inventory = [];
  var grabVehicle = new XMLHttpRequest();
  grabVehicle.open("GET", "inventory.json");
  grabVehicle.send();
  grabVehicle.addEventListener("load", grabVehicleInventory);

  return grabVehicleInventory;

})();

function grabVehicleInventory() {
  var touch = JSON.parse(this.responseText);
  inventory = touch.cars;
  IhopeThisWorks(inventory);
}

var goDom = "";
var divGet = document.getElementById("car-spot");

function IhopeThisWorks () {
  for(var i = 0; i <inventory.length; i++) {
    goDom += `<div class='cars col-xs-4'id='car-display-${i}'><h6>${inventory[i].make} ${inventory[i].model} ${inventory[i].year}</h6>`;
    goDom += `<img src='${inventory[i].pic}' class='wrapIt'>`;
    goDom += `<h6>$${inventory[i].price}</h6>`;
    goDom += `<p class><div id="car-${i}">${inventory[i].description}</div></p></div>`;
  };
  divGet.innerHTML = goDom;
}


