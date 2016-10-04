# Single Page Applications Quiz

## Description
- Create a "Car Lot" by using a combination of vanilla javascript, XHR, and Bootstrap. The following functionality should occur to the user:

```
1) When you click on any one of the car posters, the width and 
   background color of the border will change.

2) Once the user has clicked and the poster is highlighted; 
   The user can then begin typing in to the input box to change 
   the text within the poster they have selected.
```
Below you will find the specific requirements from NSS. These were specified guidelines to provide optimal functionality:

```
 - Instructions

You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure.

 ## Behavior

Create an array of cars in the inventory.json file (see example structure below). Put at least three cars in the array.

When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.

Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of container. Hint: You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.

Put a standard Bootstrap navbar element at the top of your page.

Put a text input field in the navigation bar.

Make sure you display all properties of the car in the DOM. Basic styling is up to you.

Make sure that each car card element has a CSS class which adds a black border around it.

When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.

Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.

When you start typing into the navbar's text input, the description, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

- Technical Requirements

Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.

The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).

The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.

The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.

A car DOM element that was clicked on.

A color name of your choice (see behavior requirement 5 above).

```

## How to run its
In your terminal run:
```
http-server -p 9999
```
then navigate to http://localhost:9999 in your browser.

## Contributors
- [Tommy Waters](https://github.com/Thomaswaters05)
