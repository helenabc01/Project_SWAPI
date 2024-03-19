import { Link } from "react-router-dom";
import { Container, MovieList, Movie } from "./styles.js";
import { useState, useEffect} from "react";


function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/films/')
            .then(response => response.json())
            .then(data => {
                const sortedMovies = data.results.sort((a, b) => {
                    return a.episode_id - b.episode_id;     
                });
                setMovies(sortedMovies);
            });
    }, []);
    
    return (
        <Container>
            <h1>Filmes</h1>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.episode_id}>
                            <Link to={`/details/${movie.episode_id}`}>
                            <img src="/posterMovie.jpg" alt={movie.title}></img>
                            </Link>
                        <span>{movie.title}</span>
                        <span>{movie.episode_id}</span>
                        </Movie>
                    )
                })}

            </MovieList>
        </Container>
    );
}

export default Home