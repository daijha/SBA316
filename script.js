let body = document.querySelector('body');
let h1 = document.createElement("h1");
let h3 = document.createElement("h3")
let paragraph = document.createElement("p");
body.appendChild(h1);
body.appendChild(h3)
body.appendChild(paragraph);
function lineBreak(){
    return document.createElement('br')
};


h1.textContent = "You Deserve the Best!";
h3.textContent= " A Fill in the Blanks Excercise"

paragraph.textContent = "Be nice to yourself today by spending some time on this page! \n Make sure you fill out the form to get the full experience.";

let form = document.createElement('form');
form.setAttribute("method", "post");// learned this off the internet. this makes the form data secure and hidden in the url

let nameInputlabel = document.createElement("label");
nameInputlabel.textContent = "Name/Nickname: ";

let nameInput = document.createElement('input');
nameInput.setAttribute("id", "name")
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
favoriteColorInput.setAttribute("id", "color")
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
favoriteFoodInput.setAttribute("id", "food");
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
button.style.backgroundColor= "#cdb4db"
button.setAttribute("id", "button");
button.textContent = "Submit"
button.setAttribute("type","submit");
button.addEventListener("click", function(event){
//event.preventDefault(); // DONT PUT THIS ON THE BUTTON PUT IT ON THE FORM ITSELF 
button.style.backgroundColor= "#ffd6a5"
button.style.border = "3px, solid, yellow"
alert("checking submission" )

})

// needs a function to prevent default ON THE FORM  done 
// add an alert  for fun    done
form.appendChild(button);
body.appendChild(form);

form.addEventListener("submit", function(event){
    event.preventDefault()
     let name = document.getElementById("name").value;
     let place = document.getElementById("place").value;
     let color = document.getElementById("color").value;
    let food = document.getElementById("food").value;

        

    makeStory( name, place,color, food);// should call the function to generate the story

    let coolButton = document.createElement("button")
coolButton.setAttribute("id", "button");
coolButton.textContent = "click me!"
coolButton.style.backgroundColor= "#cdb4db"
coolButton.style.border = "3px, solid, yellow"
coolButton.addEventListener("click", ()=> {
if (coolButton.textContent === "click me!"){
    coolButton.textContent = "I did it!"
    coolButton.style.backgroundColor= "#a2d2ff"
    coolButton.style.border = "3px, solid, blue"
} else if ( coolButton.textContent === "I am the BEST!" ){
    coolButton.textContent = "I'm Fantastic"
    coolButton.style.backgroundColor= "#ffc8dd"
    coolButton.style.border = "3px, solid,  green"
} else if (coolButton.textContent === "I'm Fantastic"){
    coolButton.textContent = "I'm Proud of myself"
    coolButton.style.border = "3px, solid, pink"
    coolButton.style.backgroundColor= "#fdffb6"
}else if (coolButton.textContent === "I'm Proud of myself")
{ coolButton.textContent = "I'm Brilliant!"
     coolButton.style.backgroundColor= "#ffd6a5"
     coolButton.style.border = "3px, solid, white"
}
else {coolButton.textContent = "click me!"
    coolButton.style.backgroundColor= "#cdb4db"
    coolButton.style.border = "3px, solid, yellow"    
} 
})

body.appendChild(coolButton)
})



function makeStory(name, place, color, food ){ // make a function to display the story after input is collected 
let fragment = document.createDocumentFragment();
let story = document.createElement("p")
story.setAttribute("id", "finishedStory")//should give the story a id 
story.textContent = `${name}, you are the best! Has anyone ever told you that? no?... that's crazy! ${name}, you are so special, you deserve 1 million servings of ${food}, on a ${color} plate, with a ${color} colored drink, while on a vacation in ${place}! Thank you so much for working hard and bringing your best everyday, you are appreciated ${name}, and you are LOVED! You deserve all the great ${color} things in the world! ( feeling down? Eat more ${food}!)`//write story here    done

//when story generates, the INPUT VALUES RETURN NULL SO I MAY NEED TO ATTACH IDS. tried it need more research...


fragment.appendChild(story)
body.appendChild(fragment)
}


alert(" just wanted to tell you first that YOU ARE AMAZING! enjoy :D")

console.log(nameInput.value);



//BUTTON AT THE BOTTOM OF THE PAGE :
//FIX THE COOL BUTTON. IDK WHAT I DID BUT IT ONLY CHANGES TWICE INSTEAD OF MORE 
//maybe add image too 
// see about clone node if needed 
// i want to iterate through the labels and style them for meeting requirement ...
//HOW TO IMPLEMENT BOM
//write the read me


// maybe add a heart image at the bottom of the page...
//add some styling


// STARRED: look into bom and how to implement it here
//LOOK INTO HOW TO USE AMD MAKE A DOCUMENT FRAGMENT  done


// change button border colors to match palette...
// make a mini form at the bottom of the html and use html validation 