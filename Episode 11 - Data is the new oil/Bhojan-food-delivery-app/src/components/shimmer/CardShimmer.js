export const CardShimmer = () => {
  return (
    <div className="card relative bg-white rounded-xs h-125 w-80 mx-auto my-10 overflow-hidden shadow-md">
      <div className="shimmerBG media animate-shimmer bg-gradient-to-r from-grey200 to-grey100 via-grey300  h-52"></div>
      <div className="p-8">
        <div className="shimmerBG title-line animate-shimmer bg-gradient-to-r from-grey200 to-grey100 via-grey300  h-6 rounded-full mb-4"></div>
        <div className="shimmerBG title-line end animate-shimmer bg-gradient-to-r from-grey200 to-grey100 via-grey300  h-6 rounded-full mb-4 w-1/2"></div>

        <div className="shimmerBG content-line m-t-24 animate-shimmer bg-gradient-to-r from-grey200 to-grey100 via-grey300  h-2 rounded-full mt-6 mb-4"></div>
        <div className="shimmerBG content-line animate-shimmer bg-gradient-to-r from-grey200 to-grey100 via-grey300  h-2 rounded-full mb-4"></div>
        <div className="shimmerBG content-line animate-shimmer bg-gradient-to-r from-grey200 to-grey100 via-grey300  h-2 rounded-full mb-4"></div>
        <div className="shimmerBG content-line animate-shimmer bg-gradient-to-r from-grey200 to-grey100 via-grey300  h-2 rounded-full mb-4"></div>
        <div className="shimmerBG content-line end animate-shimmer bg-gradient-to-r from-gray-200 to-gray-100 via-gray-300  h-2 rounded-full mb-4 w-40"></div>
      </div>
    </div>
  );
};
