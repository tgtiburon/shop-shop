import React, { useEffect } from "react";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import "./style.css";

const Cart = () => {
  const [state, dispatch] = useStoreContext();

  // check to see if there is anything in the state's cart
  // if not, load data from indexedDB
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      // Using add_multiple so we can  do one big dump into
      // global store
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }
    if (!state.cart.length) {
      getCart();
    }
    // we pass cart.length so it only updates
    // on load OR if we change cart.length
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }
  // toggles cart opening
  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  // TODO:
  console.log(state);
  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            {Auth.loggedIn() ? (
              <button>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
