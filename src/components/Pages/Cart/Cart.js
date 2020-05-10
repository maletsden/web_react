import React from 'react';
import {Box, Typography} from "@material-ui/core";

import './Cart.scss'
import CartItemCard from "./CartItemCard/CartItemCard";
import CartPrice from "./CartPrice/CartPrice";

const database = [
  {
    "id": 0,
    "img": {
      "path": "/images/img1.jpg",
      "title": "Рожева гіпсофіла"
    },
    "price": 450
  },
  {
    "id": 1,
    "img": {
      "path": "/images/img2.jpg",
      "title": "Рожеві тюльпани"
    },
    "price": 500
  },
  {
    "id": 2,
    "img": {
      "path": "/images/img3.jpg",
      "title": "Кущові троянди",
      "height": "300"
    },
    "price": 450
  },
];

// TODO: change it to dynamically select products rather than hard-code)
// TODO: probably use here Redux or sth else
const dataSelected = [
  {
    id: 0,
    quantity: 1,
  },
  {
    id: 1,
    quantity: 2,
  },
  {
    id: 2,
    quantity: 1,
  }
];

export default class Cart extends React.Component {
  /**
   * products: is an Array of {
   *   id:        Int, // id of product in database
   *   quantity:  Int, // the quantity of the product selected by user
   * }
   *
   * @type {{totalPrice: number, products: []}}
   */
  constructor(props) {
    super(props);

    this.state = {
      products: dataSelected || [],
      totalPrice: 0
    };

    this.freeDeliveryFrom = 500;
    this.deliveryCost = 100;
  }

  getItemById(id) {
    return database[id];
  }

  calculateTotalPrice() {
    let totalPrice = 0;

    this.state.products.forEach(
      (product, index) =>
        totalPrice += this.getItemById(product.id).price * this.state.products[index].quantity
    );

    this.setState({
      ...this.state,
      totalPrice
    })
  }

  componentDidMount() {
    this.calculateTotalPrice();
  }

  updateQuantity(index, add = true) {
    // TODO: logic if product.quantity <= 0
    // TODO: handle situation if product was deleted from cart and so indexes of products were changed as well
    const products = this.state.products.map(
      (product, productIndex) => {
        if (productIndex === index) {
          product.quantity += [-1, 1][+add];
        }

        return product;
      }
    );

    this.setState({
      ...this.state,
      products
    });

    // TODO: optimize it since we don't need to recalculate it for each product
    this.calculateTotalPrice();
  }

  render() {
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
            this.state.products.map((product, index) => (
              <Box key={index}>
                <CartItemCard data={this.getItemById(product.id)} quantity={product.quantity}
                              updateQuantity={(add) => this.updateQuantity(index, add)}/>
                <Box mb={3}/>
              </Box>

            ))
          }
        </Box>

        <Box mb={2}/>

        <hr className="hr85vw"/>

        <Box mb={2}/>

        <CartPrice
          totalPrice={this.state.totalPrice}
          deliveryPrice={this.state.totalPrice >= this.freeDeliveryFrom ? 0 : this.deliveryCost}
        />
        <Box mb={4}/>
      </div>
    );
  }
}