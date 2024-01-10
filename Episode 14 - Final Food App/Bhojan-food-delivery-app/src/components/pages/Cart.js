import { useSelector } from "react-redux";
import { MenuList } from "../molecules/MenuList";

export const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="cart-container mt-20">
      {cart.length === 0 ? (
        <div className="">
          <h2 className="text-center font-medium text-grey600 text-200  pb-4 mb-10">
            You do not have anything in your cart, yet!
          </h2>
        </div>
      ) : (
        <div className="">
          <h2 className="font-bold text-grey600 text-200 uppercase border-b-2 border-grey200 pb-4 mb-10">
            Items in your cart
          </h2>
          <MenuList menuList={cart} />
        </div>
      )}
    </div>
  );
};
