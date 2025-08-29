## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
- getElementById gets element using id. if any element that matched id it will find that. if none than value will be null or undefined.
- getElementsByClassName it finds elements that has class="className", if none than it will return empty list/array.
- querySelector it can be used using css selector and returns only first matches.
- querySelectorAll same as querySelector but return list of all matchings.
## 2. How do you **create and insert a new element into the DOM**?
- Creating element can be done using document.createElement("tagName"), also using innerHTML by passing html code you can create and insert at once. to insert created element via createElement, you can use appendChild,append,prepend methods.
## 3. What is **Event Bubbling** and how does it work?
- When event goes from child to its parent than the parent's parent and so on, its called Event bubbling.
## 4. What is **Event Delegation** in JavaScript? Why is it useful?
- Adding event to the parent and using for all child is called event delegation. Its useful when there is so many child and you have to attach event listeners to all. because you dont need to attach a tons of event listensers to all children. You just attach to its parent than you can check weather target element is sending that event or not.
## 5. What is the difference between **preventDefault() and stopPropagation()** methods?
- preventDefault() prevents form data from posting.
- stopPropagation() stops event from reching its parent elements event listeners.