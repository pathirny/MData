import { movieData } from './data.js';

let movieDataAsArray = Object.entries(movieData);
// sort movie by year - old to new
movieDataAsArray.sort(
([ key, { year: year1 }], [ key2, { year: year2 } ]) => {
    if(year1 == year2) {
        return 0;
    }
    if(year1 <= year2) {
        return -1
    } else {
        return +1
    }
})
// sort movies by Rating - low to high

movieDataAsArray.sort(
    ([ key, { rating: rating1 }], [ key2, { rating : rating2 } ]) => {
        if(rating1 == rating2) {
            return 0;
        }
        if(rating1 <= rating2) {
            return -1
        } else {
            return +1
        }
    })

for(const [title, item ] of movieDataAsArray) {

    let listContainer = document.getElementById("list-container");
    const listItem = document.createElement('div');    

    let darjText = [
        title,
        item.plot, 
        item.cast.join(', '),
        item.runtime,
        item.rating,
        item.year
    ];

 for (let i = 0; i < darjText.length; i++) {

    const p = document.createElement('p');

    p.textContent = darjText[i];

    listItem.appendChild(p);
 };

 // add image here

 let movieImage = [
    item.imgFile
];

    for (let j = 0; j < movieImage.length; j++) {

        const img = document.createElement('img');
    
        img.src = movieImage[j];
    
        listItem.appendChild(img);
     };
 listContainer.appendChild(listItem)
}

//Sort alphabetically

// let nameButton = document.querySelector("#name").innerHTML;

// function byName() {
    
//     // get all the list items from the DOM 
//     let listContainer = document.getElementById("list-container");

//     console.log(listContainer)
//     listContainer = newSortedList;

// };