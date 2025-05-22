let body = document.querySelector("body");
let h1 = document.createElement("h1");
let h3 = document.createElement("h3");
let paragraph = document.createElement("p");
body.appendChild(h1);
body.appendChild(h3);
function lineBreak() {
  return document.createElement("br");
}
//BOM implementation:
let confirm = window.confirm("Hi there! Are you ready?"); // learned on the amazing internet :D
if (confirm) {
  alert("Great! Prepare to smile!");
} else {
  alert("Take your time friend."); // if statement on the buttons for a extra "alert box".
}

h1.textContent = "You Deserve the Best!";
h3.textContent = " A Fill in the Blanks Excercise";

paragraph.textContent =
  "Be nice to yourself today by spending some time on this page! \n Make sure you fill out the form to get the full experience.";

let form = document.createElement("form");
form.setAttribute("method", "post"); // learned this off the internet. this makes the form data secure and hidden in the url

let nameInputlabel = document.createElement("label");
nameInputlabel.textContent = "Name/Nickname: ";

let nameInput = document.createElement("input");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "username");
nameInput.setAttribute("placeholder", "What is your name?");
nameInput.setAttribute("required", "true"); // makes input required
nameInput.setAttribute("minLength", 2);
nameInput.setAttribute("maxLength", 15); // character limitations

form.appendChild(nameInputlabel);
form.appendChild(nameInput); // adds the label nd the input box to the form
form.appendChild(lineBreak());

let favoriteColorLabel = document.createElement("label");
favoriteColorLabel.textContent = "Favorite color: ";

let favoriteColorInput = document.createElement("input");
favoriteColorInput.setAttribute("id", "color");
favoriteColorInput.setAttribute("type", "text");
favoriteColorInput.setAttribute("placeholder", "Write your favorite color!");
favoriteColorInput.setAttribute("required", "true");
favoriteColorInput.setAttribute("minlength", 3);

form.appendChild(favoriteColorLabel);
form.appendChild(favoriteColorInput); // adds the label nd the input box to the form
form.appendChild(lineBreak());

let favoritePlaceLabel = document.createElement("label");
favoritePlaceLabel.textContent = "Favorite place:";

let favoritePlaceInput = document.createElement("input");
favoritePlaceInput.setAttribute("id", "place");
favoritePlaceInput.setAttribute("type", "text");
favoritePlaceInput.setAttribute("name", "favoritePlace");
favoritePlaceInput.setAttribute("placeholder", "What is your favorite place?");
favoritePlaceInput.setAttribute("required", "true");
favoritePlaceInput.setAttribute("minLength", 2);
favoritePlaceInput.setAttribute("maxLength", 15); // more character limitations

form.appendChild(favoritePlaceLabel);
form.appendChild(favoritePlaceInput);
form.appendChild(lineBreak());

//NEEDS LINE BREAKS IN BETWEEN.
let favoriteFoodLabel = document.createElement("label");
favoriteFoodLabel.textContent = "Favorite food: ";

let favoriteFoodInput = document.createElement("input");
favoriteFoodInput.setAttribute("id", "food");
favoriteFoodInput.setAttribute("type", "text");
favoriteFoodInput.setAttribute("name", "favoriteFood");
favoriteFoodInput.setAttribute("placeholder", "What is your favorite food?");
favoriteFoodInput.setAttribute("required", "true");
favoriteFoodInput.setAttribute("minLength", 2);
favoriteFoodInput.setAttribute("maxLength", 15); // more character limitations

form.appendChild(favoriteFoodLabel);
form.appendChild(favoriteFoodInput);
form.appendChild(lineBreak());

//needs a button
let button = document.createElement("button");
button.style.backgroundColor = "#cdb4db";
button.setAttribute("id", "button");
button.textContent = "Submit";
button.setAttribute("type", "submit");
button.addEventListener("click", function (event) {
  //event.preventDefault(); // DONT PUT THIS ON THE BUTTON PUT IT ON THE FORM ITSELF
  button.style.backgroundColor = "#453750";
  button.style.border = "3px solid  pink";
 
  alert("checking submission. Darling one sec...");
 
  setTimeout(()=>{
  button.disabled = true // learned off of the glorius internet. disables the button after one use 
  }, 60000); // learned about setTimeout today and it looks like i needed it to stop the button from repeating and let the story upload. still VERY new to me. copied syntax online. you have 1 min after messing up the form to input a answer 
  });

form.appendChild(button);
let topForm = document.createElement("div");
topForm.appendChild(h1);
topForm.appendChild(h3); // need to go on top of the form
topForm.appendChild(paragraph);
topForm.appendChild(form);

body.appendChild(topForm);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let place = document.getElementById("place").value;
  let color = document.getElementById("color").value;
  let food = document.getElementById("food").value;

  makeStory(name, place, color, food); // should call the function to generate the story

  let coolButton = document.createElement("button");
  coolButton.setAttribute("id", "button");
  coolButton.textContent = "click me!";
  coolButton.style.backgroundColor = "#cdb4db";
  coolButton.style.border = "3px, solid, yellow";
  coolButton.addEventListener("click", () => {
    if (coolButton.textContent === "click me!") {
      coolButton.textContent = "I am the BEST!";
      coolButton.style.backgroundColor = "#a2d2ff";
      coolButton.style.border = "3px, solid, blue";
    } else if (coolButton.textContent === "I am the BEST!") {
      coolButton.textContent = "I'm Fantastic";
      coolButton.style.backgroundColor = "#ffc8dd";
      coolButton.style.border = "3px, solid,  green";
    } else if (coolButton.textContent === "I'm Fantastic") {
      coolButton.textContent = "I'm Proud of myself";
      coolButton.style.border = "3px, solid, pink";
      coolButton.style.backgroundColor = "#fdffb6";
    } else if (coolButton.textContent === "I'm Proud of myself") {
      coolButton.textContent = "I'm Brilliant!";
      coolButton.style.backgroundColor = "#ffd6a5";
      coolButton.style.border = "3px, solid, white";
    } else {
      coolButton.textContent = "click me!";
      coolButton.style.backgroundColor = "#cdb4db";
      coolButton.style.border = "3px, solid, yellow";
    }

  });

  body.appendChild(coolButton);

});

// story:
function makeStory(name, place, color, food) {
  // make a function to display the story after input is collected
  let fragment = document.createDocumentFragment();
  let story = document.createElement("p");
  story.setAttribute("id", "finishedStory"); //should give the story a id
  story.textContent = `${name}, you are the BEST! Has anyone ever told you that? no?... that's crazy! ${name}, you are so special, you deserve 1 million servings of ${food}, on a ${color} plate, with a ${color} colored drink and straw, in your favorite ${color} outfit, while on a vacation in ${place}! I know you love going there! Thank you so much for working hard and bringing your best everyday, you are APPRECIATED ${name}, and you are LOVED! You deserve all the great ${color} things in the world! ( feeling down? Eat more ${food} ${name}! You'll be back on your feet in no time!)`; 

  fragment.appendChild(story);
  body.appendChild(fragment);
}

console.log(nameInput.value);

//ITERATION
let labels = document.querySelectorAll("label");
console.log(labels);// checking that i got all labels...

labels.forEach(function(label){
 label.style.fontWeight ="bold"
 label.style.textDecoration = "underline";
 label.style.textDecorationThickness = "2px"
 label.style.textDecorationColor = "#73648a"

})

body.style.fontFamily ="consolas"
form.parentElement.style.border= "3px solid #9882ac"
form.parentElement.style.borderRadius = "10px"
form.parentElement.style.padding= "20px"



//center everything somehow ... did this in css 
//check requirements
//see about centering cool button ( may cause issues )  its centeres but i want to give it a id and make it bigger and with a little more margin!
