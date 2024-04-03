import { useEffect, useState } from "react";
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
  const [currentLocation, setCurrentLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const tempFucntion = async () => {
    const data = await fetch(
      `https://proxy.cors.sh/https://www.swiggy.com/dapi/misc/address-recommend?latlng=${currentLocation?.latitude}%2C${currentLocation?.longitude}`
    );
    const response = await data.json();
    console.log("FINAL OUTCOME", response);
  };

  useEffect(() => {
    tempFucntion();
  }, [currentLocation]);

  const getLocation = async () => {
    await setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Position", position);
      const { latitude, longitude } = position.coords;
      setCurrentLocation(() => {
        setLoading(false);
        return { lat: latitude, lng: longitude };
      });
    });
  };

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
        value={loading ? "Fetching your location..." : location}
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
        getLocation={getLocation}
      />
    </div>
  );
};
