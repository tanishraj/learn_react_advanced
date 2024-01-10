export const MiniCard = ({
  imagePath,
  imageAltText,
  key,
  imageContainerClasses,
  ...restProps
}) => {
  return (
    <div className={imageContainerClasses} key={key}>
      <img src={imagePath} alt={imageAltText} {...restProps} />
    </div>
  );
};
