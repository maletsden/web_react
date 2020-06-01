import PropTypes from 'prop-types';

export const ITEM = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  img: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.number.isRequired,
});


export const CartData = PropTypes.shape({
  items: PropTypes.arrayOf(ITEM).isRequired,
  quantityById: PropTypes.object.isRequired,
});

export const CartPropTypes = {
  cartData: CartData.isRequired,
  totalPrice: PropTypes.number.isRequired,
  changeQuantity: PropTypes.func.isRequired,
};

export const ContentPagePropTypes = {
  onAddItemClick: PropTypes.func.isRequired,
};

