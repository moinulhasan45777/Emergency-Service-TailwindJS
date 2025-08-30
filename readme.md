1) Ans: getElementById gets the element with the given ID. If mistakenly the ID is used multiple times inside the HTML document then only the first element will be selected. getElementsByClassName return an array with all the elements with the class names given inside the paranthesis. querySelector returns the element with the given CSS selector. querySelectorAll returns a list of elements with the given selectors which are descendant of the element on which the method is called. 

2) Ans: I'll use document.createElement() e.g('div') to create the element. Then I'll used appendChild(), append() or similar methods to add the element into the DOM or Document Object Model.

3) Ans: Event bubbling is an event which starts from the target element or inner element and propagates or moves up to the parent elements one by one until the top most node is reached in the DOM tree.

This works in this sequence: button -> parent -> parent's parent and so on.

4) Ans: Event Delegation is the method which is to add an event listener to the parent element to handle the events that happens on the child elements with the help of event bubbling instead of adding one event listener on each of the child elements. When the number of child or buttons will be a lot, it will be very inefficient to add an event listener at every child or button. This is where Event Delegation comes in. Event Delegation eliminates this drawback and with this we can avoid the usage of unnecessary resource.


5) Ans: preventDefault() stops or prevents the default browser action for that event. But it does not stop eventBubbling. On the other hand, stopPropagation() does not affect the browser's default action for that event, but it stops eventBubbling.