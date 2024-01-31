import { FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useToggle } from "../../hooks/useToggle";
import { SidebarContainer } from "../molecules/SidebarContainer";
export const MapButton = () => {
  const { show, toggle } = useToggle();
  const { location } = useSelector((state) => state.location);

  return (
    <div className="text-grey300 ">
      <button className="flex items-center gap-1 mt-3" onClick={toggle}>
        <FaMapMarkerAlt />
        {location ? (
          <span className="max-w-64 block text-left line-clamp-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {location?.formatted_address}
          </span>
        ) : (
          <span>Choose Location...</span>
        )}
      </button>
      {show && <SidebarContainer togglePanel={toggle} />}
    </div>
  );
};
