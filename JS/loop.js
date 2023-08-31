'use strict'

console.log('our loop js file is connected!')

//While loops require a starting variable. In this case, the variable is set to 0.

// let count = 0;

// while(count <= 50) {
//     console.log('current count: ', count);
//     count = count + 5;
// }

// for (let count = 0; count < 50; count++) {
//     console.log('we are looping', count)
// }

// for (let count = 50; count >= 0; count-= 10) {
//     console.log('count going down', count)
// }

//grab html section element id in the section in the footer
let imageElement = document.getElementById('imageSection');

// console.log(imageElement)

let userInput = prompt('How many images would you like to see?')

let userInputParsed = parseInt(userInput)

// console.log(typeof(userInput))


if (!isNaN(userInput)) {
    console.log('we have a valid number to use')
} else {
    userInput = prompt('Please tell me how many images you would like to see.)')
}
// the "prompt" method returns the value as a string

//user number, create li, 
for (let i = 0; i < userInputParsed; i++) {
    let listImage = documnet.createElement('li');
    console.log(listImage);
    //string literal
    listImage.textContent = `image number ${i + 1}`;
    //create html img tag first
    let image = document.createElement('img');
    //we add actual img link
    console.log('empty image tag: ', image)
    image.setAttribute('src', 'images/codeImage.png');
    //is how we get the imageto the html it appeads each image to the browser
    //we give <li> tag to our section in html
    listImage.appendChild(image);
    imageElement.appendChild(listImage);
}
