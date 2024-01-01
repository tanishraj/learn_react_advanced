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
    <div className="search-cotnainer mt-32 p-3 flex items-center justify-center">
      <div className="search-box w-1/2 relative flex">
        <input
          data-testid="searchInput"
          type="text"
          className="search-input peer font-montserrat text-base w-full p-2.5 border border-primary rounded-l-md focus:ring-0 focus:border-primary-500 outline-none bg-transparent"
          placeholder="which restaurant you are looking for?"
          value={searchKeyword}
          onChange={(e) => setSerachText(e.target.value)}
        />

        <button
          data-testid="searchButton"
          className="search-button font-montserrat peer-hover:bg-primary peer-active:bg-primary peer-focus:bg-primary font-medium text-base px-4 cursor-pointer border border-primary border-l-0 rounded-r-md transition-colors duration-300 transition-bg hover:bg-primary hover:text-black focus:bg-primary-500 focus:text-black"
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
