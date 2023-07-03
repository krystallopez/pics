import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (term) => {
    console.log("do a search with", term);
  }

    return (
      <div>
        <SearchBar onSubmit={handleSubmit} />
      </div>
    );
}

export default App;
