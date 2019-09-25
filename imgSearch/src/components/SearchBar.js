import React, { useState } from "react";

const SearchBar = props => {
  const [term, setTerm] = useState("");

  const onFormSubmit = event => {
    event.preventDefault();
    props.onSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            placeholder="Enter search term and hit enter"
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
