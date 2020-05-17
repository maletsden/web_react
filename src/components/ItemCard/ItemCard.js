import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import {
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
  Card
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {green} from '@material-ui/core/colors';

const ColorButton = withStyles(() => ({
  root: {
    color: green[50],
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}))(Button);

function ItemCard({ itemData, onAddItemClick }) {

  return (
    <Box marginX={3} marginBottom={7}>
      <Card className="itemCard">
        <CardMedia
          component="img"
          alt={itemData.img.alt | itemData.img.title}
          height={itemData.img.height | '300'}
          image={itemData.img.path}
          title={itemData.img.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center" paragraph={true}>
            {itemData.img.title}
          </Typography>

          <Grid container direction="row" justify="space-around">
            <Typography variant="h6">
              {itemData.price} грн
            </Typography>
            <ColorButton
              variant="contained"
              endIcon={<ShoppingCartIcon/>}
              onClick={onAddItemClick}
            >
              Замовити
            </ColorButton>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ItemCard;
