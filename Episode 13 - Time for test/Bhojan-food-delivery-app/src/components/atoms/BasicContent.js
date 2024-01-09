export const BasicContent = ({ propsData, isDivider = true }) => {
  const { title } = propsData;
  return (
    <div className="block">
      {isDivider && <hr className="text-grey300 my-4" />}
      <h2 className="my-4 text-400 font-bold text-grey800">{title}</h2>
    </div>
  );
};
