import { useState, useEffect } from "react";

function MoviesGrid(){
    const apiBaseUrl = "https://api.themoviedb.org/3";
    const apiKey = "9124a0e1d58a5aa17a09d4d274dd8fec";

    let [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMoviesNowPlaying() {
            const response = await fetch(`${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`);
            const jsonResponse = await response.json();
            setMovies(jsonResponse.results);
        };
        fetchMoviesNowPlaying();
    }, [])
    
    return (
        <div id="movies-grid">
            {movies.map(movie => 
                <Movie
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                    title={movie.title} />
                )}

        </div>
    )

    console.log(movies);

}

function Movie(props) {

    const imageBaseUrl = "https://image.tmdb.org/t/p/w300";
    const imagePath = imageBaseUrl + props.poster_path;
    
    return (
        <div class="movie-card">
            <img src={imagePath}/>
            <p>⭐ {props.vote_average}</p>
            <h1>{props.title}</h1>
        </div>
    )
}

export default MoviesGrid;