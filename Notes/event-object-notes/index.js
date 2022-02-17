// * THE EVENT OBJECT

// When an event listener is triggered and calls its associated function, it automatically does something interesting...
// It automatically passes a single argument to the function!
// This argument is a reference to the event object

// The event object contains a number of properties that describe the event that occurred
// "What did the user just do?"

// * A very useful property of the event object is "event.target" - this lets you access information about the element the event happened to!

// Tell me all about what happened if the user clicks the element with id "button1"
// const button1 = document.querySelector("#button1");

// button1.addEventListener("click", (event) => {
//     console.log("!", event);
// })

// ============================

// Grab all the buttons on the page and put them into an array using querySelectorAll...
const buttons = document.querySelectorAll(".myButton");

// Loop through the array, and give EACH button an identical event listener
buttons.forEach(button => {
    // Give each button an identical event listener
    // Also give the "event" object as an argument to the callback function...
    button.addEventListener("click", (event) => {
        
        // * Now, we can find out which element caused an event by using event.target
        // "Did the user click on the first or the second button?"
        // event.target tells us which <button> it was!
        console.log(`I clicked on ${event.target.textContent}!`);
        
        // * Remember: "event.target" refers to the ELEMENT the event happened to
        // E.g. In the above code, "which <button> did the user click?"
        // After clicking the button, change its "disabled" property to true
        event.target.disabled = true;  
    })
})

// =======================================================

