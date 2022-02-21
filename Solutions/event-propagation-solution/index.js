const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const grandchild = document.querySelector("#grandchild");

parent.addEventListener("click", () => {
    alert("I am the PARENT!");
}, true)

child.addEventListener("click", () => {
    alert("I am the CHILD!");
}, true)

grandchild.addEventListener("click", event => {
    alert("I am the GRANDCHILD!");
    //event.stopPropagation();
}, true)