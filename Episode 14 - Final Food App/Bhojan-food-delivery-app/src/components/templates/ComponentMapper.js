import { COMPONENT_HASH } from "../../utils/componentHash";

export const ComponentMapper = ({ propsData }) => {
  const SectionComponent = COMPONENT_HASH[propsData?.["@type"]];

  if (!SectionComponent) return;

  return <SectionComponent propsData={propsData} />;
};
