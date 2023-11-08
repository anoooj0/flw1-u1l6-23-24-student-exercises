// HTML selectors
let changeTextButton = document.querySelector("button");
let nameHeader = document.querySelector("h1");
let message = document.querySelector("p");

changeTextButton.addEventListener("dblclick", function(){

    // 1. Select the nameHeader variable.
    // - With the innerHTML property, update the value to say your name.
    nameHeader.innerHTML = "Anuj";

    // 2. Select the message variable.
    // - With the innerHTML property, update the value to say anything you want
    message.innerHTML = "Have a nice day."



});

// 3. Try this out: change the event type to "dblclick". Test the double-click now.