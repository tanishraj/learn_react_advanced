export const Search = () => {
  return (
    <div className="search-cotnainer">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="which restaurant you are looking for?"
        />

        <button className="search-button">search</button>
      </div>
    </div>
  );
};
