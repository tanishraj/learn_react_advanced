import { useEffect, useState } from "react";
import { MdMyLocation } from "react-icons/md";
import { useNavigator } from "../../hooks/useNavigator";

export const LocationList = ({ locationList, handleLocation, getLocation }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="p-2 border border-indigo-600 flex items-center gap-3">
        <div className="text-primary">
          <MdMyLocation size={25} />
        </div>
        <div className="cursor-pointer" onClick={getLocation}>
          <div className="font-bold text-black">Get Current Location</div>
          <div className="text-grey500">using GPS</div>
        </div>
      </div>
      {locationList.map((location, index) => (
        <button
          key={location?.place_id}
          className="p-2 border border-indigo-600 text-left"
          onClick={() => handleLocation(location?.place_id)}
        >
          <div className="font-bold text-black">
            {location?.structured_formatting?.main_text}
          </div>
          <div className="text-grey500">
            {location?.structured_formatting?.secondary_text}
          </div>
        </button>
      ))}
    </div>
  );
};
