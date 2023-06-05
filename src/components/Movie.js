import React from "react";
import PropTypes from "prop-types";

const Movie = ({ poster, title }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
    >
      <div className="cursor-pointer duration-300 ease-in-out max-h-96">
        <figure
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="h-full"
        >
          <img
            src={poster}
            alt={title}
            className="rounded-t max-h-96 h-96 w-full"
          />

          <figcaption
            className={`${hovered ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0 p-0"
              } transition-all duration-300 ease-in-out`}
          >
            <p className="text-lg mb-4 p-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-800">
              {title}
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default Movie;
