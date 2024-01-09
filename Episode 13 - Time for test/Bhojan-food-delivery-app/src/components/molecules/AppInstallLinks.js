import { IMAGE_BASE_URL } from "../../utils/constants";

export const AppInstallLinks = ({ propsData }) => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-grey200 mt-20 p-6">
      <h2 className="text-grey800 text-400 font-bold">{propsData?.title}</h2>
      <div className="flex items-center justify-end gap-4">
        <img
          className="max-w-full w-64"
          src={`${IMAGE_BASE_URL}${propsData?.iosAppImage}`}
        />
        <img
          className="max-w-full w-64"
          src={`${IMAGE_BASE_URL}${propsData?.androidAppImage}`}
        />
        <img />
      </div>
    </div>
  );
};
