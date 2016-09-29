var carLot = (function () {

var inventory = [];

var carRequest = new XMLHttpRequest();
carRequest.open('GET', "inventory.json");
carRequest.send();
carRequest.addEventListener('load', getInventory)

return getInventory;

})();

function getInventory() {
  inventory = JSON.parse(this.responseText).cars;
  productRequest.send();
}

//***EXAMPLE ONLY BELOW***
  // return {
  //   loadInventory: function (callback) {
  //     var inventoryLoader = new XMLHttpRequest();

  //     inventoryLoader.addEventListener("load", function () {

  //     });
  //   }
  // };

// })();