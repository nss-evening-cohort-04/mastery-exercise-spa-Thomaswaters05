var CarLot = (function() {
    var inventory = [];
    var grabVehicle = new XMLHttpRequest();
    grabVehicle.open("GET", "inventory.json");
    grabVehicle.send();
    grabVehicle.addEventListener("load", grabVehicleInventory);

    return grabVehicleInventory;

    function grabVehicleInventory() {
        var touch = JSON.parse(this.responseText);
        inventory = touch.cars;
        logThis(inventory);
    };
})(CarLot || {});






