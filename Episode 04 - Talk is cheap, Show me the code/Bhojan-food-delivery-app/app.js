import React from "react";
import ReactDOM from "react-dom/client";

import { zomatoData } from "./zomato-data";

const Header = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <h1>BHOJAN</h1>
      </div>

      <ul className="menu-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const Search = () => {
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

const Card = ({ cardData }) => {
  console.log(cardData);
  const { info } = cardData;
  return (
    <article className="card">
      <div className="card-thumbnail-wrapper">
        <img
          src={info?.image?.url}
          alt={info?.image?.name}
          className="card-thumbnail"
        />
      </div>
      <div className="card-content">
        <header className="card-header">
          <h2 className="card-title">{info?.name}</h2>
          <div className="card-featured">
            <div className="card-stats">
              {info?.cuisine
                ?.map((cuisine) => {
                  return cuisine.name;
                })
                .join(", ")}
            </div>
          </div>
        </header>
        <div className="card-body">
          <p>{info?.costText?.text}</p>
          <button className="card-action">
            {info?.rating?.aggregate_rating}
          </button>
        </div>
      </div>
    </article>
  );
};

const CardList = () => {
  return (
    <div className="card-list-container">
      {zomatoData.map((cardData) => (
        <Card key={cardData?.info?.resId} cardData={cardData} />
      ))}
      <Card cardData={zomatoData?.[0]} />
    </div>
  );
};

const Body = () => {
  return (
    <div className="container">
      <Search />
      <CardList />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
