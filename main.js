import React from 'react';
import SearchMovies from "./searchMovies"
import "../src/style.css"


class Main extends React.Component {
  render() {
    return (
        <div className="container">
             <h1 className="title">React Movie search</h1>
             <SearchMovies />
        </div>
     
    );
  }
}

export default Main;