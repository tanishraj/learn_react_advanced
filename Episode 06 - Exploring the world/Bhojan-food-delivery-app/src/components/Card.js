export const Card = ({ cardData }) => {
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
