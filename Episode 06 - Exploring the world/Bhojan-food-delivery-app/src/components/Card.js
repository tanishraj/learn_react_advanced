const IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const Card = ({ cardData }) => {
  const { info } = cardData;
  return (
    <article className="card">
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
    </article>
  );
};
