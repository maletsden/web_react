import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QUANTITY
} from '../actions/index'

const initialState = {
  items: [],
  quantityById: {}
};

const addedItems = (state = initialState.items, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.find(item => item._id === action.item._id)) {
        return state;
      }
      return [...state, action.item];
    case REMOVE_FROM_CART:
      return state.filter(item => item._id !== action.item._id);
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItemId = action.item._id;
      return {
        ...state,
        [newItemId]: (state[newItemId] || 0) + 1
      };
    case REMOVE_FROM_CART:
      return (({[action.item._id]:_, ...rest}) => rest)(state);
    case CHANGE_QUANTITY:
      const oldItemId = action._id;

      if (!(oldItemId in state)) return state;

      return {
        ...state,
        [oldItemId]:
          action.increase ?
            Math.min(state[oldItemId] + 1, 1 << 31 - 2) :
            Math.max(state[oldItemId] - 1, 0)
      };
    default:
      return state;
  }
};

export const getQuantity = (state, productId) => state.quantityById[productId] || 0;

export const getAddedItems = state => state.items;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
      return {
        items: addedItems(state.items, action),
        quantityById: quantityById(state.quantityById, action)
      };
    case CHANGE_QUANTITY:
      return {
        ...state,
        quantityById: quantityById(state.quantityById, action)
      };
    default:
      return state;
  }
};

export default cart