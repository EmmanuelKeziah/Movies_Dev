( async function (){
    try {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=1ef33d0988889fd4f6c374211d20e38c";

        let allMovies = await fetch (url);
        let allMoviesJson = await allMovies.json();

        console.log(allMoviesJson); //the response from the API

        let movieContainer = document.getElementById("movieList");
        let newImg = document.createElement("img");
        let newTitle = document.createElement("h2");

        newDiv.appendChild(newImg);
        newDiv.appendChild(newTitle);
    }
    catch (error) {
        console.error("Error fetching movies:", error);
    }
})();