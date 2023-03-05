import { movieData } from './data.js';

let movieDataAsArray = Object.entries(movieData);

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

for(const [title, item ] of movieDataAsArray) {

    let listContainer = document.getElementById("list-container");
    const listItem = document.createElement('div');    

    let darjText = [
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

 listContainer.appendChild(listItem)
