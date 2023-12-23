import { Search } from "./Search";
import { CardList } from "./CardList";

export const Body = () => {
  return (
    <div className="container">
      <Search />
      <CardList />
    </div>
  );
};
