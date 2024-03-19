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
                    return a.release_date > b.release_date ? 1 : -1;     
                });
    
                const ImagesPromises = sortedMovies.map((movie, index) => {
                    return fetch(`https://starwarspicapi.onrender.com/pictures/star-wars/${index +1}`)
                        .then(response => response.json())
                        .then(imageData => {
                            console.log(imageData); 
                            movie.nome = imageData.nome;
                            return movie;
                        });                        
                });
                Promise.all(ImagesPromises)
                    .then(moviesWithImages => {
                        setMovies(moviesWithImages);
                    })
            });
    }, []);
    
    return (
        <Container>
            <h1>Movies: Star Wars</h1>
            <MovieList>
                {movies.map((movie, index) => {
                    return (
                        <Movie key={movie.episode_id}>
                            <Link to={`/details/${index + 1}`}>
                                <img src={movie.nome} alt={movie.title}></img>
                            </Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
                 <img src=""></img>
                    
            </MovieList>
        </Container>
    );
}

export default Home;
