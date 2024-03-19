import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from './../Home/styles';
import { Container } from './style';
import { Link } from "react-router-dom";


function Details() {
    const { episode_id } = useParams();
    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${episode_id}`)
            .then(response => response.json())
            .then(data => {

                const {title, opening_crawl, release_date} = data

            const movie = {
                episode_id,
                title,  
                sinopse: opening_crawl,
                relaseDate: release_date
            }
            setMovie(movie)
        })
    }, [episode_id]);

    return (
        <Container>
            <div className='movie'>
                <img src="/posterMovie.jpg" alt={movie.title}/>
                <div className='details'>
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className='releaseDate'>{movie.relaseDate}</span>
                    <Link to="/"><button >Go Back</button></Link>
                   
                </div>
            </div>
        </Container>
    );
}

export default Details;
