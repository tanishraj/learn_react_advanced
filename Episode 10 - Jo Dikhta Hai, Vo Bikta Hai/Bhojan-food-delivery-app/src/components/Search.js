import React, { useState } from "react";

export const Search = ({ restaurantList, getSearchResults }) => {
  const [searchKeyword, setSerachText] = useState("");

  const findRestaurants = (searchKeyword) => {
    if (searchKeyword === "") return getSearchResults();
    const filteredList = restaurantList?.filter((restaurant) => {
      return restaurant?.info?.name
        ?.toLowerCase()
        ?.includes(searchKeyword.toLowerCase());
    });
    getSearchResults(filteredList);
  };

  return (
    <div className="search-cotnainer">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="which restaurant you are looking for?"
          value={searchKeyword}
          onChange={(e) => setSerachText(e.target.value)}
        />

        <button
          className="search-button"
          onClick={() => {
            findRestaurants(searchKeyword);
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};
