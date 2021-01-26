/*
================
Exercise 2
----------
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4 - **Extra**
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

Prefer to work on a codepen? https://codepen.io/makanti/pen/MWwMgmW?editors
================
*/
const movies = [{
        title: "Color Out of Space",
        director: "Richard Stanley",
        type: "sci-fi",
        haveWatched: true,
    },
    {
        title: "A Twelve-Year Night",
        director: "Álvaro Brechner",
        type: "horror",
        haveWatched: false,
    },
    {
        title: "The Whistlers",
        director: "Corneliu Porumboiu",
        type: "comedy",
        haveWatched: true,
    },
    {
        title: "The Invisible Man",
        director: "Leigh Whannell",
        type: "horror",
        haveWatched: false,
    },
];

/// form creation
var body = document.getElementsByTagName('body');
var form = document.createElement("form");
var br1 = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");


// create input text for title
var title = document.createElement("input");
var br = document.createElement("br");
title.setAttribute("type", "title");
title.setAttribute("name", "title");
var titleLabel = document.createElement("label");
form.appendChild(titleLabel);
titleLabel.innerText = "Title";
//title.setAttribute("label", "title");
// Append the title input to the form 
form.appendChild(title);
title.style.width = "200px";
form.appendChild(br);
// create input text for director
var director = document.createElement("input");
director.setAttribute("type", "text");
director.setAttribute("name", "director");
// Append the director input to the form 
form.appendChild(director);
director.style.width = "200px";
form.appendChild(br1);
// create input text for type
var type = document.createElement("input");
type.setAttribute("type", "text");
type.setAttribute("name", "type");
// Append the type input to the form 
form.appendChild(type);
type.style.width = "200px";
form.appendChild(br2);
// create input text for haveWatched
var haveWatched = document.createElement("input");
haveWatched.setAttribute("type", "text");
haveWatched.setAttribute("name", "Title");
// Append the haveWatched input to the form
form.appendChild(haveWatched);
haveWatched.style.width = "200px";
form.appendChild(br3);
// create a submit button 
var save = document.createElement("input");
save.setAttribute("type", "submit");
save.setAttribute("value", "Submit");
save.setAttribute('id', 'saveId');
// Append the submit button to the form 
form.appendChild(save);
save.style.width = "100px";
save.style.alignItems = "center";
//Append the form to the body
document.getElementsByTagName("body")[0].appendChild(form);
form.style.display = "flex";
//form.style.flexDirection = "column";
form.style.alignItems = "center";

var val1 = document.getElementById('all-movies');
var val2 = document.getElementById('movies-number');
val1.style.textAlign = "center";
var h1 = document.getElementsByTagName('h1');
//h1.style.textAlign = "center";

//Task 1

function showMovies(allMovies) {
    for (let i of allMovies) {
        var p = document.createElement('p');
        p.textContent = `${i.title} ${i.director}`;
        val1.appendChild(p);
        val2.innerText = allMovies.length;
    };
}
setTimeout(showMovies(movies), 2000);

// create a new movie object for your favorite movie

const movie = [];
// create addMovies function

function getData() {

    for (let item of movie) {
        title.value = `${item.title}`;
        director.value = `${item.director}`;
        type.value = `${item.type}`;
        haveWatched.value = `${item.haveWatched}`;

    };
}
/* object constructur function  */
function Movie(title, director, type, haveWatched) {
    this.title = title;
    this.director = director;
    this.type = type;
    this.haveWatched = haveWatched;
}

/* store object into movie array */
var save = document.getElementById('saveId');
save.addEventListener('click', function(e) {
    movie.push(new Movie(title.value, director.value, type.value, haveWatched.value));
    for (let i of movie) {
        var p = document.createElement('p');
        p.textContent = `${i.title} ${i.director}`;
        val1.appendChild(p);
        val2.innerText = parseInt(val2.innerText) + 1;
        clear();
    };
    console.log(movie);
    e.preventDefault();
});
// clear text field function
function clear() {
    title.value = "";
    director.value = "";
    type.value = "";
    haveWatched.value = "";
}