import React from "react";
import Movies from "./components/Movies";
import Search from "./components/Search";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: "",
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    const url = `https://www.omdbapi.com/?apikey=45f0782a&s=war`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          this.setState({
            movies: data.Search,
          });
        } else {
          this.setState({
            movies: [],
          });
        }
      });
  }

  handleInput = (query) => {
    this.setState({
      query,
    });
  };

  render() {
    const { movies, query } = this.state;
    const isSearched = (item) =>
      !query || item.Title.toLowerCase().includes(query.toLowerCase());

    return (
      <div className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
        <Search
          query={query}
          onInput={this.handleInput}
          placeholder="Search for Movie Title ..."
        />
        <Movies movies={movies.filter(isSearched)} />
      </div>
    );
  }
}

export default App;
