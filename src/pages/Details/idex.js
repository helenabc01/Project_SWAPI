import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './style';
import { Link } from "react-router-dom";
import Sabre from './indexS';

function Details() {
    const { episode_id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${episode_id}`)
            .then(response => response.json())
            .then(data => {
                const { title, opening_crawl, release_date } = data;
                const movieData = {
                    episode_id,
                    title,
                    sinopse: opening_crawl,
                    releaseDate: release_date
                };
                setMovie(movieData);
    
                fetch(`https://starwarspicapi.onrender.com/pictures/star-wars/${episode_id}`)
                    .then(response => response.json())
                    .then(imageData => {
                        setMovie(prevMovie => ({
                            ...prevMovie,
                            image: imageData.nome
                        }));
                    });
            });
    }, [episode_id]);
    
    

    return (
        <Container>
            <div className='movie'>
                <img src={movie.image} alt={movie.title}/>
                <div className='details'>
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className='releaseDate'>{movie.releaseDate}</span>
                    <Sabre/>
                
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            </div>
        </Container>
    );
}

export default Details;
