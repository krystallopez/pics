import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  // eslint-disable-next-line no-unused-vars
  const [term, setTerm] = useState(""); // state to manage term with input

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
