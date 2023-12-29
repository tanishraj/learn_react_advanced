import { useRouteError } from "react-router-dom";

export const PageNotFound = () => {
  const err = useRouteError();
  console.log("Error Hook", err);
  return (
    <div>
      <div id="notfound" className="relative h-screen bg-black">
        <div className="notfound grid place-items-center w-full h-screen text-center ">
          <div className="notfound-404 ">
            <h1 className="block text-1000 font-bold text-primary50 m-0 leading-none">
              404
            </h1>
            <h2 className="block text-500 font-bold text-primary50 m-0 uppercase">
              Page not found
            </h2>
            <a
              className="table m-auto mt-5 filter-button border border-primary rounded-md px-4 py-2 font-medium text-primary cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white"
              href="/"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
