import { movieData } from './data.js';

movieData;

// !!!!! Objects.enteries changes the movieData object into arrays
const movieDataAsArray = Object.entries(movieData);

// working with these array as seen below allos me to access each key and value in the objects
console.log(movieDataAsArray[0][1])

// This function will push the array value to html
function first () {
    let plot = movieDataAsArray[0][1].plot;
    let rating = movieDataAsArray[0][1].rating;
    document.getElementById("plot1").innerHTML = plot;
    document.getElementById("rating1").innerHTML = rating;
}

first();


// Next create a for loop which will creat p elements and push all informations into appropriate place