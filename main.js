import { movieData } from './data.js';

movieData;

// !!!!! Objects.enteries changes the movieData object into arrays
let movieDataAsArray = Object.entries(movieData);
// working with these array as seen below allos me to access each key and value in the objects
// console.log(movieDataAsArray[0][1])

// Darjeeling Limited Loop
    let darjContainer = document.getElementById('darj-container');
    let darjText = [
     movieDataAsArray[0][0],
     movieDataAsArray[0][1].plot, 
     movieDataAsArray[0][1].cast.join(', '),
     movieDataAsArray[0][1].runtime,
     movieDataAsArray[0][1].rating,
     movieDataAsArray[0][1].year
];
//for loop which creates each elements iterating through the darjText array
 for (let i = 0; i < darjText.length; i++) {
// Creates the p elements
    const p = document.createElement('p');
// This pushes the darjText to the 'p' elements
    p.textContent = darjText[i];
// Appends the p element to the darj container parent
    darjContainer.appendChild(p);
};

// Loop for The Royal Tenenbaums
    let tenenbaumsContainer = document.getElementById('tenenbaums-container');

    let tenenbaumsTexts = [
     movieDataAsArray[1][0], 
     movieDataAsArray[1][1].plot, 
     movieDataAsArray[1][1].cast.join(', '),
     movieDataAsArray[1][1].runtime,
     movieDataAsArray[1][1].rating,
     movieDataAsArray[1][1].year
    ];

    for (let i = 0; i < tenenbaumsTexts.length; i++) {

    const p = document.createElement('p');
    
     p.textContent = tenenbaumsTexts[i];
     tenenbaumsContainer.appendChild(p);
};

// loop for Fantastic Mr.Fox
let mrFoxContainer = document.getElementById('mrfox-container');

let mrFoxTexts = [
 movieDataAsArray[2][0], 
 movieDataAsArray[2][1].plot, 
 movieDataAsArray[2][1].cast.join(', '),
 movieDataAsArray[2][1].runtime,
 movieDataAsArray[2][1].rating,
 movieDataAsArray[2][1].year
];

for (let i = 0; i < mrFoxTexts.length; i++) {

 const p = document.createElement('p');

 p.textContent = mrFoxTexts[i];
 mrFoxContainer.appendChild(p);
};

// Loop for The Grand Budapest Hotel
let budapestContainer = document.getElementById('budapest-container');

let budapestTexts = [
 movieDataAsArray[3][0], 
 movieDataAsArray[3][1].plot, 
 movieDataAsArray[3][1].cast.join(', '),
 movieDataAsArray[3][1].runtime,
 movieDataAsArray[3][1].rating,
 movieDataAsArray[3][1].year
];

for (let i = 0; i < budapestTexts.length; i++) {

 const p = document.createElement('p');

 p.textContent = budapestTexts[i];
 budapestContainer.appendChild(p);
};

//Sort alphabetically

let nameButton = document.querySelector("#name").innerHTML;

nameButton;

function byName() {
    console.log(movieDataAsArray.sort());
}
