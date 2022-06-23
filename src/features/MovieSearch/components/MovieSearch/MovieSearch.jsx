import React, { useState } from "react";
import styled from 'styled-components';
import axios from 'axios';


const SubmitButton = styled.button`
  background-color: #8f0e4a;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 12px;

  &:hover {
    background-color: #054cda;
  }
`

const MovieSearch = ({ setMovie }) => {
  const [movieName, setMovieName] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;



  const getMoviesByName = async (name) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${name}`;
    const response = await axios.get(url);
    setMovie(response.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getMoviesByName(movieName);
  };

  // div container
    // form start
      // button input with text and placeholder
      // on every change set movie to what was changed
      // upon submit fetch api

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.currentTarget.value)}
        />
        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
      </form>
    </div>
  );
};

export default MovieSearch;
