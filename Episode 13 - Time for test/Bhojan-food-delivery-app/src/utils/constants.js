// DEFAULT LOCATION
export const LAT = 12.9689968;
export const LNG = 77.72088529999999;

// NEW STRUCTURED API
export const COLLECTION_PAGE_API = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${LAT}&lng=${LNG}&collection=`;
export const COLLECTION_PAGE_API_FRACTION = `&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

// Home Page Restaurant List API
export const RESTAURANT_LIST_API_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${LAT}&lng=${LNG}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

// Restaurant Details - Menu List Page API
export const RESTAURANT_DETAILS_API_URL = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${LAT}&lng=${LNG}&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

// Swiggy Media URL
export const IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const POPULAR_CUISINE_IMAGE_PATH =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";

export const ITEM_CATEGORY_TEXT =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

// Search Page, Popular Cuisine API
export const POPULAR_CUISINE_API = `https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${LAT}&lng=${LNG}`;

export const SEARCH_SUGGESTION_API = `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${LAT}&lng=${LNG}`;

export const SUBMIT_ACTION_SUGGESTION_API = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${LAT}&lng=${LNG}&str=`;
export const SUBMIT_ACTION_SUGGESTION_API_FRACTION = `&trackingId=undefined&submitAction=SUGGESTION`;

// Navigation Links Item
export const NAVIGATION_ITEMS = [
  {
    name: "Search",
    path: "/search",
    icon: "search",
  },
  {
    name: "Offers",
    path: "/about",
    icon: "offers",
  },
  {
    name: "Help",
    path: "/about",
    icon: "help",
  },
  {
    name: "Sign In",
    path: "/about",
    icon: "signin",
  },
  {
    name: "Cart",
    path: "/cart",
    icon: "cart",
  },
];
