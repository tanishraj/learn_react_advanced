import { GridWidget } from "../components/templates/GridWidget";
import { ImageInfoLayoutCard } from "../components/molecules/ImageInfoLayoutCard";
import { FavouriteRestaurantInfoWithStyle } from "../components/molecules/FavouriteRestaurantInfoWithStyle";
import { BasicContent } from "../components/atoms/BasicContent";

export const COMPONENT_HASH = {
  "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget": GridWidget,
  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard":
    ImageInfoLayoutCard,
  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle":
    FavouriteRestaurantInfoWithStyle,
  "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent": BasicContent,
};

export const HEADER_HASH = {
  topical_banner: "Best offers for you",
};
