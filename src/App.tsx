import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data.json';
import './App.css';
import { useState } from 'react';
import UserRating from './components/UserRating.component';

interface MoviesInterface {
  id: number;
  image: string;
  title: string;
  description: string;
  genres: string[];
  user_rating: number;
}

function App() {
  const [movieData, setMovieData] = useState(data);

  const updateUserRating = (id: number, newRating: number) => {
    setMovieData((prevData: { movies: MoviesInterface[] }) => {
      const newDataObject = {
        ...prevData,
        movies: prevData.movies.map((movie) =>
          id === movie.id ? { ...movie, user_rating: newRating } : movie
        ),
      };

      return newDataObject;
    });
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '15px' }}>
        {movieData.movies.map((movie: MoviesInterface) => (
          <div
            key={'ge76jt5wc' + movie.id}
            className="card"
            style={{ width: '36rem' }}
          >
            <img
              className="card-img-top"
              src={movie.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <div>
                {movie.genres.map((genre: string, index: number) => (
                  <span
                    key={'34wte63e' + index}
                    className="badge rounded-pill text-bg-secondary"
                    style={{ marginRight: '4px' }}
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <p className="card-text" style={{ marginTop: '24px' }}>
                {movie.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '8px',
                }}
              >
                <UserRating
                  id={movie.id}
                  currentRating={movie.user_rating}
                  updateUserRating={updateUserRating}
                />
              </div>

              <span className="heading">User Rating: {movie.user_rating}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
