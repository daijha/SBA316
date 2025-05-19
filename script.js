let body = document.getElementById('body');
let h1 = document.createElement("h1");
let paragraph = document.createElement("p");
body.appendChild(h1);
body.appendChild(paragraph);
function lineBreak(){
    return document.createElement('br')
};


h1.textContent = "Give yourself Grace";
paragraph.textContent = "Be nice to yourself today by spending some time on this page.";

let form = document.createElement('form');
form.setAttribute("method", "post");// learned this off the internet. this makes the form data secure and hidden in the url

let nameInputlabel = document.createElement("label");
nameInputlabel.textContent = "Name/Nickname: ";

let nameInput = document.createElement('input');
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name","username");
nameInput.setAttribute("placeholder","What is your name?");
nameInput.setAttribute("required", "true")// makes input required 
nameInput.setAttribute("minLength", 2)
nameInput.setAttribute("maxLength", 15)// character limitations

form.appendChild(nameInputlabel);
form.appendChild(nameInput); // adds the label nd the input box to the form 
form.appendChild(lineBreak());
//NEEDS LINE BREAKS IN BETWEEN. 


let favoriteColorLabel = document.createElement("label");
favoriteColorLabel.textContent = "Favorite color: ";

let favoriteColorInput = document.createElement('input');
favoriteColorInput.setAttribute("type", "color");
favoriteColorInput.setAttribute("id", "favoriteColor" ); // gives you a color box to choose from!


form.appendChild(favoriteColorLabel);
form.appendChild(favoriteColorInput); // adds the label nd the input box to the form
form.appendChild(lineBreak());

let favoritePlaceLabel = document.createElement("label");
favoritePlaceLabel.textContent = "Favorite place:";

let favoritePlaceInput = document.createElement("input");
favoritePlaceInput.setAttribute("type", "text");
favoritePlaceInput.setAttribute("name","favoritePlace");
favoritePlaceInput.setAttribute("placeholder", "What is your favorite place?");
favoritePlaceInput.setAttribute("required", "true")
favoritePlaceInput.setAttribute("minLength", 2)
favoritePlaceInput.setAttribute("maxLength", 15)// more character limitations

form.appendChild(favoritePlaceLabel);
form.appendChild(favoritePlaceInput);
form.appendChild(lineBreak());

//NEEDS LINE BREAKS IN BETWEEN. 
let favoriteFoodLabel = document.createElement("label");
favoriteFoodLabel.textContent = "Favorite food: ";

let favoriteFoodInput = document.createElement("input");
favoriteFoodInput.setAttribute("type", "text");
favoriteFoodInput.setAttribute("name","favoriteFood") ;
favoriteFoodInput.setAttribute("placeholder", "What is your favorite food?");
favoriteFoodInput.setAttribute("required", "true")
favoriteFoodInput.setAttribute("minLength", 2)
favoriteFoodInput.setAttribute("maxLength", 15)// more character limitations

form.appendChild(favoriteFoodLabel);
form.appendChild(favoriteFoodInput);
form.appendChild(lineBreak());

//needs a button 
let button = document.createElement("button")
button.textContent = "Submit"
button.setAttribute("type","submit");
button.addEventListener("click", function(event){
//event.preventDefault(); // DONT PUT THIS ON THE BUTTON PUT IT ON THE FORM ITSELF 
alert("checking submission" )

})

// needs a function to prevent default ON THE FORM  done 
// add an alert  for fun    done
form.appendChild(button);
body.appendChild(form);

form.addEventListener("submit", function(event){
    event.preventDefault()
     let name = document.getElementById(nameInput.value);
     let place = document.getElementById(favoritePlaceInput.value)
     let color = document.getElementById(favoriteColorInput.value);
    let food = document.getElementById(favoriteFoodInput.value);

})

console.log(nameInput.value)
//BUTTON AT THE BOTTOM OF THE PAGE :
let coolButton = document.createElement("button")
coolButton.textContent = "click me!"
coolButton.addEventListener("click", ()=> {
if (coolButton.textContent === "click me!"){
    coolButton.textContent = "I did it!"
} else if ( coolButton.textContent === "I did it!" ){
    coolButton.textContent = "I'm Fantastic"
} else if (coolButton.textContent === "I'm Fantastic"){
    coolButton.textContent = "I'm Proud of myself"
}else if { coolButton.textContent = "I'm smart"}
else( coolButton.textContent = "I'm smart") {coolButton.textContent = "click me!"} // FIX THIS SYNTAX SO THAT IT WORKS 

})

body.appendChild(coolButton)


// get the form validation to work: add required to all inputs  ! i did but the message does not pop up 
// put the form in a div ... might not need to 
//add some styling
// create a story or something in html to fill in the values form the form 
// make a fun color/text  changing button that says  "i did it " "im fantastic "" i am proud my self" " i am smart "(second event handler)
// find a way to modify the css classes using.style or classList in response to user interaction 
// STARRED: look into bom and how to implement it here
//LOOK INTO HOW TO USE AMD MAKE A DOCUMENT FRAGMENT WITH CLONENODE
// make a mini form at the bottom of the html and use html validation  TODAY