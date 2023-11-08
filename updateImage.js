// variables to store HTML elements
let placeholder = document.querySelector(".placeholder");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");


// click event for buttonOne
buttonOne.addEventListener('click', function() {

    // 1. Select the placeholder and update the src.
    // - The image address should be a picture of a place you want to travel to.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.
    placeholder.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/278px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg";



});


// click event for buttonTwo
buttonTwo.addEventListener('click', function() {

    // 2. Select the placeholder and update the src.
    // - The image address should be a picture that represents your mood.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.

  placeholder.src="https://www.nkch.org/blog/_assets/images/2023/03-march/tiredheader.jpg"

    

});