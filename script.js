let body = document.getElementById('body')
let h1 = document.createElement("h1")
let paragraph = document.createElement("p")
body.appendChild(h1)
body.appendChild(paragraph)


h1.textContent = "Give yourself Grace"
paragraph.textContent = "Be nice to yourself today by spending some time on this page."

let form = document.createElement('form')
form.setAttribute("method", "post")// learned this off the internet. this makes the form data secure and hidden in the url

let nameInputlabel = document.createElement("label")
nameInputlabel.textContent = "Name: "

let nameInput = document.createElement('input')
nameInput.setAttribute("type", "text")
nameInput.setAttribute("name","username")
nameInput.setAttribute("placeholder","What is your name?")

form.appendChild(nameInputlabel)
form.appendChild(nameInput) // adds the label nd the input box to the form 

//NEEDS LINE BREAKS IN BETWEEN. 

let favoriteColorLabel = document.createElement("label")
favoriteColorLabel.textContent = "Favorite color: "

let favoriteColorInput = document.createElement('input')
favoriteColorInput.setAttribute("type", "color")
favoriteColorInput.setAttribute("id", "favoriteColor" ) // gives you a color box to choose from!

form.appendChild(favoriteColorLabel)
form.appendChild(favoriteColorInput) // adds the label nd the input box to the form

let favoritePLaceLabel = document.createElement("label")
favoritePLaceLabel.textContent = "Favorite place: "

let favoritePLaceInput = document.createElement("input")
favoritePLaceInput.setAttribute("type", "text")
favoritePLaceInput.setAttribute("name","favorite Place") 
favoritePLaceInput.setAttribute("placeholder", "What is your favorite place in the whole world?")


//NEEDS LINE BREAKS IN BETWEEN. 

form.appendChild(favoritePLaceLabel)





body.appendChild(form)
