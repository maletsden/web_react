import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'

const getCartAddedItems = state => fromCart.getAddedItems(state.cart);
export const getCartQuantity = (state, id) => fromCart.getQuantity(state.cart, id);

export const getCartTotal = state => {
  return getCartAddedItems(state).reduce(
    (total, item) => total + item.price * getCartQuantity(state, item._id),
    0
  );
};

export const getCartItemsNum = state => {
  return getCartAddedItems(state).reduce(
    (total, item) => total + getCartQuantity(state, item._id),
    0
  );
};

export default combineReducers({
  cart
});