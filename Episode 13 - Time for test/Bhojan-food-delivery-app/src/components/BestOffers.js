import { IMAGE_BASE_URL } from "../utils/constants";

export const BestOffers = ({ offersList }) => {
  return (
    <div className="block mt-10">
      <h2 className="text-grey900 font-bold text-400 mb-5">
        Best offers for you
      </h2>
      <div className="mt-4 pb-5 flex gap-4 items-center justify-between overflow-x-scroll overflow-y-hidden scroll-smooth">
        {offersList?.map((offers) => (
          <img
            className="max-w-full h-64"
            key={offers.id}
            src={`${IMAGE_BASE_URL}${offers?.imageId}`}
            alt={offers.id}
          />
        ))}
      </div>
    </div>
  );
};
