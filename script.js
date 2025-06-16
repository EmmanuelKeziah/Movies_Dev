const heroSection = document.querySelector(".hero-display");

const backgrounds = [
    'url("./Images/background-1.jpg")',
    'url("./Images/background-2.jpg")',
    'url("./Images/background-3.jpg")',
    'url("./Images/background-4.jpg")',
    'url("./Images/background-5.jpg")',
    'url("./Images/background-6.jpg")',
]

let index = 0;
function changeBackground() {
    heroSection.style.backgroundImage = backgrounds[index];
    index = (index + 1) % backgrounds.length;
}

setInterval(changeBackground, 10000); 

changeBackground(); 

const fetchMoviesByTrend = async function (){
    let url = "https://api.themoviedb.org/3/trending/movie/day?api_key=2594b313a8dd028dd39fd6439a4b84a7";

    let allMovies = await fetch (url);
    let allMoviesJson = await allMovies.json();

    // console.log (allMoviesJson);

    for (let i =0; i <allMoviesJson.results.length; i++) {
        let movieBox = document.createElement("div");
        let movieImg = document.createElement("img");
        let movieTitle = document.createElement("h2");
        let parentDiv = document.getElementById("trendy");

        movieImg.src = "https://image.tmdb.org/t/p/w500" + allMoviesJson.results[i].poster_path;
        movieTitle.innerText = allMoviesJson.results[i].title;

        //Change movie title from "The Accountant²" to "The Accountant 2"
        if (movieTitle.innerText === "The Accountant²") {
            movieTitle.innerText = "The Accountant 2";
        }

        //Get the release year from the release_date property
        let releaseYear = allMoviesJson.results[i].release_date;
        let year = releaseYear.split("-")[0];
        movieTitle.innerText += ` (${year})`; 

        movieBox.appendChild(movieImg); //This attaches the image to the movie box div
        movieBox.appendChild(movieTitle);
        parentDiv.appendChild(movieBox);

        // console.log(allMoviesJson.results[i].title);
        // console.log(allMoviesJson.results);
        // console.log(allMoviesJson.results[i].poster_path);
    }
}();

const fetchMoviesByTopRated = async function (){
    let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=1ef33d0988889fd4f6c374211d20e38c";

    let allMovies = await fetch (url);
    let allMoviesJson = await allMovies.json();

    console.log(allMoviesJson);

    for (let i = 0; i < allMoviesJson.results.length; i++) {
        let movieBox = document.createElement("div");
        let movieImg = document.createElement("img");
        let movieTitle = document.createElement("h2");

        let parentDiv = document.getElementById("topRated");
        movieImg.src = "https://image.tmdb.org/t/p/w500" + allMoviesJson.results[i].poster_path;
        movieTitle.innerText = allMoviesJson.results[i].title;

        let releaseYear = allMoviesJson.results[i].release_date;
        let year = releaseYear.split("-")[0];
        movieTitle.innerText += ` (${year})`;

        if (movieTitle.innerText === "The Accountant²") {
            movieTitle.innerText = "The Accountant 2";
        }

        movieBox.appendChild(movieImg);
        movieBox.appendChild(movieTitle);
        parentDiv.appendChild(movieBox);
    }
}();

const fetchMoviesByPopularity = async function (){
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=1ef33d0988889fd4f6c374211d20e38c";

    let allMovies = await fetch (url);
    let allMoviesJson = await allMovies.json();

    // console.log(allMoviesJson); //Used to get the initial response from the API

    for (let i = 0; i < allMoviesJson.results.length; i++) {
        let movieBox = document.createElement("div");
        let movieImg = document.createElement("img");
        let movieTitle = document.createElement("h2");

        let parentDiv = document.getElementById("movieList");



        movieImg.src = "https://image.tmdb.org/t/p/w500" + allMoviesJson.results[i].poster_path;
        movieTitle.innerText = allMoviesJson.results[i].title;

        if (movieTitle.innerText === "The Accountant²") {
            movieTitle.innerText = "The Accountant 2";
        }

        let releaseYear = allMoviesJson.results[i].release_date;
        let year = releaseYear.split("-")[0];
        movieTitle.innerText += ` (${year})`;

        movieBox.appendChild(movieImg); 
        movieBox.appendChild(movieTitle);
        parentDiv.appendChild(movieBox);
    }
}();

