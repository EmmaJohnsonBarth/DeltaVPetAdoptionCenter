// Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data.

// At least one dynamic component should be based on user input.

// At least one dynamic component should use a conditional statement to determine the output.

// Stretch Goals
// Try out the confirm() function, in addition to prompt(). When’s the right time to use this?

// If the user gives you a color, can you set a part of your page to be that color?


'use strict mode'

let userChoice = prompt('What type of animal are you looking to adopt? Options are a dog, cat, or lizard.')

let lowercaseChoice = userChoice.toLowerCase();

if (lowercaseChoice === 'dog') {
    window.open('https://emmajohnsonbarth.github.io/DeltaVPetAdoptionCenter/dogs.html');
} else if (lowercaseChoice === 'cat') {
    window.open('https://emmajohnsonbarth.github.io/DeltaVPetAdoptionCenter/cats.html')
} else if (lowercaseChoice === 'lizard') {
    window.open('https://emmajohnsonbarth.github.io/DeltaVPetAdoptionCenter/lizards.html')
} else {
    alert('sorry, those are your only choices');
}