import { useMovies } from '../../Providers/MoviesProvider';
import styled from 'styled-components'
import "../favStyles.css"
// import MovieDetails from '../../MovieSearch/components/MovieDetails/MovieDetails'

// how import the above function??

// The project needs to:
// Include routing (with 2 pages)
// You need to be able to search for a film.
// You need to have a homepage with a search bar.
// You need to be able to favorite a film.
// You need to be able to view your favorite films in another page from the search bar.
// This should use Context/Redux/useReducer to save your favorite movies.
// When you favorite a movie you just need to store the name of the movie, year, Runtime, and Actors.
// You need to design the application! In class we will cover some of the logic required - but it is expected that you design the application in a way that appeals to you.

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


const FavoritesPage = () => {
    const { movies, removeMovie } = useMovies();





    return (
        <div>
            <h1>Favorites</h1>
            {movies.map(movie => (
                <div key={movie.Year}>
                    <Container className="details-container">
                        <img src={movie.Poster} alt={movie.Title} />
                        <Content>
                            <h1>{movie.Title}</h1>
                            <h2>Year: {movie.Year}</h2>
                            <h2>Runtime:{movie.Runtime}</h2>
                            <p>{movie.Actors}</p>
                            <button onClick={() => removeMovie(movie.Title)}>Remove</button>
                        </Content>
                    </Container>
                </div>
            ))}
        </div>
    )
}

export default FavoritesPage;