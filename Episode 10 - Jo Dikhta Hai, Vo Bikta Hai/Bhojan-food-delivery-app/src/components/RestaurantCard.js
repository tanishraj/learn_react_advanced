import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../utils/constants";

export const RestaurantCard = ({ cardData }) => {
  const { info } = cardData;
  return (
    <article className="card">
      <Link to={`/restaurant/${info.id}`}>
        <div className="card-thumbnail-wrapper">
          <img
            src={`${IMAGE_BASE_URL}${info?.cloudinaryImageId}`}
            alt={info?.image?.name}
            className="card-thumbnail"
          />
        </div>
        <div className="card-content">
          <header className="card-header">
            <h2 className="card-title">{info?.name}</h2>
            <div className="card-featured">
              <div className="card-stats">{info?.cuisines?.join(", ")}</div>
            </div>
          </header>
          <div className="card-body">
            <p>{info?.costForTwo}</p>
            <button className="card-action">{info?.avgRating}</button>
          </div>
        </div>
      </Link>
    </article>
  );
};
