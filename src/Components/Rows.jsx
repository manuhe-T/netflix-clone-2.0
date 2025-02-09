import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../axios';
import '../Styles/row.css';
import playSVG from '../assets/SVG/play_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';

const Rows = ({ title, fetchUrl, isLargeRow = false }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setMovies(requests.data.results);

      return requests;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div key={movie.id} className="row__posterContainer">
                <img
                  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <span className="row__posterTitle">
                  <img src={playSVG} className="svg" />
                  <span>
                    {movie?.name || movie?.title || movie?.original_name}
                  </span>
                </span>
              </div>
            )
        )}
      </div>
    </div>
  );
};

Rows.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
};

export default Rows;
