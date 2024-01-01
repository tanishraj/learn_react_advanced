import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../utils/constants";

export const RestaurantCard = ({ cardData }) => {
  const { info } = cardData;
  return (
    <article
      data-testid="restaurantCard"
      className="card rounded-md shadow-md peer-hover:scale105 overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out bg-grey100 text-grey700 flex flex-col justify-between"
    >
      <Link
        data-testid="restaurantCardLink"
        className="link text-grey700 decoration-0 flex flex-col flex-1"
        to={`/restaurant/${info.id}`}
      >
        <div className="card-thumbnail-wrapper max-h-64 overflow-hidden">
          <img
            src={`${IMAGE_BASE_URL}${info?.cloudinaryImageId}`}
            alt={info?.image?.name}
            className="card-thumbnail peer w-full max-w-full h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="card-content p-4 flex flex-col justify-between flex-1">
          <header className="card-header">
            <h2 className="card-title mt-0 mb-1 text-300 font-bold text-grey800">
              {info?.name}
            </h2>
            <div className="card-featured mb-6 text-sm">
              <div className="card-stats">{info?.cuisines?.join(", ")}</div>
            </div>
          </header>
          <div className="card-body flex items-center justify-between text-base">
            <p>{info?.costForTwo}</p>
            <button className="card-action border border-primary rounded-md px-2 py-1 font-medium text-primary cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white">
              {info?.avgRating}
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
};
