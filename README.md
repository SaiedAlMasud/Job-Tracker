1. 
getElementById : It returns only one element because the id can be used in one element of an html file. Its an unique selector.

getElementByClassName: It returns multiple element where the same class name is used as one class name can be placed in many elements.

querySelector: It returns the first element of a css selector and the selector can be .class or #id or the tag name.

querySelectorAll: It returns all the elements with the css selector.

2. 

1: Create the element
const div = document.createElement("div");

2: Then add content
div.innerText = "Hello World";

3: Insert it where you want to place it
document.getElementById("body").appendChild(div);

3. 

Event bubbling is when an event starts from the target element and bubbles up to its parents.

4. 
Event delegation is when you attach an event listener to a parent element and use it to handle events for its children.
It is useful because:
-It works dinamically.
-We don't have to write addEventListener() function to all elements repeatedly. So, we have to write less code.

5. 
preventDefault() - It prevents the default browser behavior. Like stopping a form from submitting or a link from navigating.
stopPropagation() - Stops the event from bubbling up to parent elements.