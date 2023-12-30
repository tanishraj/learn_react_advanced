import { useOnlineStatus } from "../hooks/useOnlineStatus";

export const OnlineStatus = () => {
  const { onlineStatus } = useOnlineStatus();
  return (
    <div
      className={` absolute  right-0 top-[-10px] w-2 h-2 rounded-full shadow-md shadow-black pulse animate-pulse-animation ${
        onlineStatus ? "bg-primary" : "bg-red"
      }`}
    ></div>
  );
};
