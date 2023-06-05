import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
  handleInputChange = (event) => {
    const { onInput } = this.props;
    const query = event.target.value.trim();

    if (query === "") {
      onInput(""); // Clear search results
    } else {
      onInput(query);
    }
  };

  render() {
    const { query, placeholder } = this.props;

    return (
      <form
        className="bg-gray-100 dark:bg-gray-900 py-6 flex flex-col items-center justify-center relative overflow-hidden sm:py-12"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="search"
          value={query}
          placeholder={placeholder}
          onChange={this.handleInputChange}
          className="py-3 px-4 w-1/2 rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100"
        />
      </form>
    );
  }
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Search;
