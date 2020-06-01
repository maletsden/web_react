import {Box, Card, CardContent} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";

import './CartItemCard.scss'
import Typography from "@material-ui/core/Typography";

export default function CartItemCard(props) {
  return (
    <Card>
      <CardContent>
        <Box className="cartItemBox">
          <Box>
            <img src={props.data.img.path} alt={props.data.img.title} className="cartItemImg"/>
          </Box>
          <Box mr={2}/>
          <Box>
            <Box className="cartItemTitle">
              {props.data.img.title}
            </Box>

            <Box mb={3}/>

            <Box className="cartPrice">
              {props.data.price} грн
            </Box>

            <Box mb={3}/>

            <Box className="cartItemQuantity">
              {/* TODO: replace margins to sth better since element will move (quantity: 9 -> 10) */}
              <RemoveIcon onClick={() => props.updateQuantity(Math.max(props.quantity - 1, 0))}/>
              <Box ml={1}/>
              <Typography>
                {props.quantity}
              </Typography>
              <Box ml={1}/>
              <AddIcon onClick={() => props.updateQuantity(props.quantity + 1)}/>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}