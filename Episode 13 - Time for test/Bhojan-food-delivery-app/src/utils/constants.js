// DEFAULT LOCATION
export const LAT = 12.9351929;
export const LNG = 77.62448069999999;

// Home Page Restaurant List API
export const RESTAURANT_LIST_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Restaurant Details - Menu List Page API
export const RESTAURANT_DETAILS_API_URL = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9165757&lng=77.6101163&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

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

export const SUBMIT_ACTION_SUGGESTION_API = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${LAT}&lng=${LNG}&str=Biryani&trackingId=undefined&submitAction=SUGGESTION`;

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
