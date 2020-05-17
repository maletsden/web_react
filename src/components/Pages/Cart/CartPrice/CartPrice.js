import {Box, Typography} from "@material-ui/core";
import React from "react";

export default function CartPrice(props) {
  return (
    <Box className="cartCosts">
      <Box className="cartPriceAlign cartPartPrice">
        <Typography>
          <Box fontWeight="fontWeightBold" component="span">
            Вартість:
          </Box>

        </Typography>
        <Typography>
          <Box fontWeight="fontWeightBold" component="span">
            {props.totalPrice} грн
          </Box>
        </Typography>
      </Box>

      <Box mb={1}/>

      <Box className="cartPriceAlign cartPartPrice">
        <Typography>
          <Box fontWeight="fontWeightBold" component="span">
            Доставка:
          </Box>
          <b></b>
        </Typography>
        <Typography>
          <Box fontWeight="fontWeightBold" component="span">
            {props.deliveryPrice} грн
          </Box>
        </Typography>
      </Box>

      <Box mb={1}/>

      <Box className="cartPriceAlign">
        <Typography variant="h6">
          <Box fontWeight="fontWeightBold" component="span">
            Всього:
          </Box>
        </Typography>
        <Typography variant="h6">
          <Box fontWeight="fontWeightBold" component="span">
            {props.totalPrice + props.deliveryPrice} грн
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}