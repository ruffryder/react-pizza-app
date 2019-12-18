import { createSelector } from "reselect";

const selectCart = state => state.boccianiCart;

export const selectCartItems = createSelector(
  [selectCart],
  boccianiCart => boccianiCart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  boccianiCart => boccianiCart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulatedTotal, cartItem) =>
      accumulatedTotal + cartItem.quantity * cartItem.price,
    0
  )
);
