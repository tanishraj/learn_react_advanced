import { useOnlineStatus } from "../hooks/useOnlineStatus";

export const OnlineStatus = () => {
  const { onlineStatus } = useOnlineStatus();
  return (
    <div className={`circle pulse ${onlineStatus ? "green" : "red"}`}></div>
  );
};
