import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="m-0 p-0">
            <Movie poster={movie.Poster} title={movie.Title} />
          </div>
        ))}
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;
