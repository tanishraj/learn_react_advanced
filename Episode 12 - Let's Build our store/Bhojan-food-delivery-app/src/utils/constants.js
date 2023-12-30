export const RESTAURANT_LIST_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const RESTAURANT_DETAILS_API_URL = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9165757&lng=77.6101163&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

export const IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const ITEM_CATEGORY_TEXT =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
