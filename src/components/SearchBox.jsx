import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa3 ba b--green bg-lightest-blue w5">
      <input
        type="search"
        onChange={searchChange}
        placeholder="search robots"
      />
    </div>
  );
};

export default SearchBox;
