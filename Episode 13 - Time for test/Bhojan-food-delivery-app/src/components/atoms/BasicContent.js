export const BasicContent = ({ propsData }) => {
  console.log(propsData);
  return (
    <div className="block">
      <hr className="text-grey300 my-4" />
      <h2 className="m-0 mt-6 -mb-4 text-400 font-bold text-grey800">
        {propsData?.title}
      </h2>
    </div>
  );
};
