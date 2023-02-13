import { movieData } from './data.js';

movieData;

// !!!!! Objects.enteries changes the movieData object into arrays
const movieDataAsArray = Object.entries(movieData);

// working with these array as seen below allos me to access each key and value in the objects
// console.log(movieDataAsArray[0][1])

// This function will push the array value to html
function first () {
    let plot = movieDataAsArray[0][1].plot;
    let rating = movieDataAsArray[0][1].rating;
    let darjeeling = movieDataAsArray[0][0];
    let year = movieDataAsArray[0][1].year;
    let cast = movieDataAsArray[0][1].cast;
    let runtime = movieDataAsArray[0][1].runtime;

    document.getElementById("darjeeling").innerHTML = darjeeling;
    document.getElementById("plot1").innerHTML = plot;
    document.getElementById("rating1").innerHTML = rating;
    document.getElementById("year1").innerHTML = year;
    document.getElementById("cast1").innerHTML = cast;
    document.getElementById("runtime1").innerHTML = runtime;
}

first();


// Next create a for loop which will creat p elements and push all informations into appropriate place
let parent = document.querySelector('#description2');

for (let i = 0; i <= 5; i++) {
    let p = document.createElement('p');
    p.textContent = movieDataAsArray[0][1].plot;
    
    parent.append(p);
}
