import { useRouteError } from "react-router-dom";

export const PageNotFound = () => {
  const err = useRouteError();
  console.log("Error Hook", err);
  return (
    <div>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>

          <a href="/">Go Back Home</a>
        </div>
      </div>
    </div>
  );
};
