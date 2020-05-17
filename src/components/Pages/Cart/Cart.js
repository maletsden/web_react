import React from 'react';
import {Box, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import {CartPropTypes} from '../../../propTypes/propTypes';

import './Cart.scss'
import CartItemCard from "./CartItemCard/CartItemCard";
import CartPrice from "./CartPrice/CartPrice";
import {connect} from 'react-redux'
import {getCartTotal} from "../../../reducers";
import {changeQuantity} from "../../../actions";


const mapStateToProps = state => ({
  cartData: state.cart,
  totalPrice: getCartTotal(state)
});
const mapDispatchToProps = dispatch => ({
  changeQuantity: (id, increase) => dispatch(changeQuantity(id, increase))
});


class Cart extends React.Component {
  render() {
    const FREE_DELIVERY_FROM = 500;
    const DELIVERY_COST = 100;
    return (
      <div>
        <Typography variant="h4" align="center">
          Ваші замовлення
        </Typography>

        <Box mb={2}/>

        <hr className="hr85vw"/>

        <Box mb={4}/>

        {/* Card Items List */}
        <Box mx={3} mb={7}>
          {
            this.props.cartData.items.map((item, index) => (
              <Box key={index}>
                <CartItemCard data={item} quantity={this.props.cartData.quantityById[item._id]}
                  updateQuantity={increase => this.props.changeQuantity(item._id, increase)}/>
                <Box mb={3}/>
              </Box>

            ))
          }
        </Box>

        <Box mb={2}/>

        <hr className="hr85vw"/>

        <Box mb={2}/>

        <CartPrice
          totalPrice={this.props.totalPrice}
          deliveryPrice={this.props.totalPrice >= FREE_DELIVERY_FROM ? 0 : DELIVERY_COST}
        />
        <Box mb={4}/>
      </div>
    );
  }
}

Cart.propTypes = CartPropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Cart);