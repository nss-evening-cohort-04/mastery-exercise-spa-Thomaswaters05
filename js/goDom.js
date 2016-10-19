var goDom = "";
var divGet = document.getElementById("car-spot");

function logThis(inventory) {
    for (var i = 0; i < inventory.length; i++) {

        goDom += `<div class='cars'id='car-display-${i}'><h6>${inventory[i].make} ${inventory[i].model} ${inventory[i].year}</h6>`;

        goDom += `<img src='${inventory[i].pic}' class='wrapIt'>`;

        goDom += `<h6>$${inventory[i].price}</h6>`;

        goDom += `<p><div class="para" id="car-${i}">${inventory[i].description}</div></p></div>`;
    };
    divGet.innerHTML = goDom;
    CarLot.buildEventz();
}