function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  carLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
carLot.loadInventory();