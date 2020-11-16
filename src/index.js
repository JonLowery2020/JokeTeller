import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      jokes: [],
      isFetchingJokes: false
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchJokes = this.searchJokes.bind(this);
  }

  searchJokes(limit = 10) {
    this.setState({ isFetchingJokes: true });

    fetch(
      `https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          accept: "application/json"
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        const jokes = json.results;

        this.setState({
          jokes,
          isFetchingJokes: false
        });
      });
  }

  onSearchChange(value) {
    this.setState({
      searchTerm: value
    });
  }

  renderJokes() {
    return (
      <ul>
        {this.state.jokes.map((item) => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <SearchForm
          onFormSubmit={this.searchJokes}
          onSearchvalueChange={this.onSearchChange}
          isSearching={this.isFetchingJokes}
          onSingleSearch={() => this.searchJokes(1)}
        />

        {this.state.isFetchingJoke
          ? "Searching For Laughs..."
          : this.renderJokes()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App version="1.0" />, rootElement);
