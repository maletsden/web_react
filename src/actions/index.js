/*
 * action types
 */

export const ADD_TO_CART       = 'ADD_TO_CART';
export const REMOVE_FROM_CART  = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY   = 'CHANGE_QUANTITY';

/*
 * action creators
 */

export function addToCart(item) {
  return { type: ADD_TO_CART, item };
}
export function removeFromCart(item) {
  return { type: REMOVE_FROM_CART, item };
}

export function changeQuantity(_id, value) {
  return { type: CHANGE_QUANTITY, _id, value };
}
