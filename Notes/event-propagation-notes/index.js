// * EVENT PROPAGATION

// Event propagation is not as weird or scary as it may sound!

// Imagine we want to click a button, which has a "click" event listener attached to it...
// However, its parent element ALSO has a "click" event listener!

const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", event => {
    //alert("You clicked the PARENT element!");

    grandparent.style.borderColor = "blue";

    event.stopPropagation();
}, true)

// Call the function when the user clicks the button..
// When the function has finished, we call "event.stopPropagation"
// This stops any ancestor elements (e.g. parent, grandparent) accessing the "click" event, so their event listeners do not get triggered 
child.addEventListener("click", event => {
    // alert("You clicked the CHILD element!");

    grandparent.style.borderColor = "green";

    //event.stopPropagation();
}, true);

// ==========================================

// * Propagation 1: Event bubbling

// The DEFAULT JS behaviour in this case is that all "click" event listeners will be run, starting with the TARGET element.
// Then, any relevant event listeners on the target's ANCESTORS will be called!
// This process goes UP in the DOM, from the target's parent up to the <body tag
// * It is called "bubbling" because bubbles also go from bottom to top (e.g. in a glass of cola!)

// ? How can we stop this happening?

// We can stop it by using a method of the event object called "stopPropagation".
// This stops the event propagating beyond the TARGET element we use this method on.

// =========================================

// * Propagation 2: Event capturing

// As we saw above, by default, event listeners in JS use BUBBLING to decide on the order the should be run.
// So, we go from the target element OUTWARDS.

// However, we can also choose to propagate an event from the OUTSIDE to the INSIDE!
// This process is called "capturing".
// Each element before the target with a relevant event listener "captures" the event before it finally gets to the target element.

// ? How can we make this happen?

// We can use a third argument of the event listener called "useCapture".
// By default, this is set to "false".
// If we set it to true on our event listeners...
// ... event are "heard" in the reverse order to usual - starting with the <body> tag, and ending with the target element.

/* 

* EVENT LISTENER:

element.addEventListener(arg1, arg2, arg3)

arg1 = "What kind of event are we listening for?", e.g. "click", "input", "keydown", etc.
arg2 = Function - what do we want to happen?
arg3 = OPTIONAL! "Do we want to use event capturing?" (true or false - default false)

*/