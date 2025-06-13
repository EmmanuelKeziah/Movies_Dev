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

        movieBox.appendChild(movieImg); //This attaches the image to the movie box div
        movieBox.appendChild(movieTitle);
        parentDiv.appendChild(movieBox);

        // console.log(allMoviesJson.results[i].title);
        // console.log(allMoviesJson.results);
        // console.log(allMoviesJson.results[i].poster_path);
    }

    
    
}();