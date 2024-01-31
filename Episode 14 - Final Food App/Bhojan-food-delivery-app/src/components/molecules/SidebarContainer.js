import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { Input } from "../atoms/Input";
import {
  LANG_LAT_API,
  LOCATION_API,
  LOCATION_API_FRACTION,
} from "../../utils/constants";
import { LocationList } from "../organisms/LocationList";
import { updateLocation } from "../../redux/slices/locationSlice";

export const SidebarContainer = ({ togglePanel }) => {
  const [location, setLocation] = useState("");
  const [locationList, setLocationList] = useState([]);
  const dispatch = useDispatch();

  const searchLocation = async () => {
    const locationData = await fetch(
      `${LOCATION_API}${location}${LOCATION_API_FRACTION}`
    );
    const locationResponse = await locationData.json();
    setLocationList(locationResponse?.data);
  };

  const clearSearchLocation = () => {
    setLocationList([]);
    setLocation("");
  };

  const handleLocation = async (placeId) => {
    const data = await fetch(`${LANG_LAT_API}${placeId}`);
    const response = await data.json();
    await dispatch(updateLocation(response.data?.[0]));
    togglePanel();
  };

  return (
    <div className="flex gap-5 flex-col fixed left-0 top-0 bg-grey100 h-svh w-[450px] p-3">
      <IoCloseOutline
        size={50}
        onClick={togglePanel}
        className="flex self-end cursor-pointer text-grey600"
      />
      <Input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        showBackButton={false}
        showClearButton={location}
        onClear={clearSearchLocation}
        onEnter={searchLocation}
        placeholder="Search for area, street name..."
      />

      <LocationList
        locationList={locationList}
        handleLocation={handleLocation}
      />
    </div>
  );
};
