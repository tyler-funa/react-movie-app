import React from "react";
import "./styles.css";
import styled from 'styled-components';
import { useMovies } from '../../../Providers/MoviesProvider';

const Container = styled.div`
  padding: 5rem;
`

const Content = styled.section`
  text-align: left;
  display: flex;
  flex-direction: column;

  h1, h2 {
    margin: 0;
  }
  button {
  background-color: #8f0e4a;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0px 10px 13px -7px #000000;


  &:hover {
    background-color: #054cda;
  }

  }
`

const MovieDetails = ({ Title, Year, imdbID, Type, Poster, Plot, Actors, Runtime }, favorites) => {
  const { addMovie, movies } = useMovies();

  const addMovieWithCheck = (movie) => {
    if (movies.some(m => m.Title === movie.Title)) {
      return;
    } else {
      addMovie(movie)
    }
  }

  return (
    <Container className="details-container">
      <img src={Poster} alt={`${Title} poster.`} />
      <Content>
        <h1>{Title}</h1>
        <h2>Year: {Year}</h2>
        <h2>IMDB ID: {imdbID}</h2>
        <p>Plot: {Plot}</p>
        <p>Actors: {Actors}</p>
        <p>Runtime: {Runtime}</p>
        <button
          onClick={() => addMovieWithCheck({  Title, Year, imdbID, Type, Poster, Plot, Actors, Runtime   })}
        >Add to favorites</button>
      </Content>
    </Container>
  );
};

export default MovieDetails;
