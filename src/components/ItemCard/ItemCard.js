import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {green} from '@material-ui/core/colors';
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ColorButton = withStyles(() => ({
  root: {
    color: green[50],
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}))(Button);

function ItemCard({ itemData }) {
  const classes = useStyles();

  return (
    <Box marginX={3} marginBottom={7}>
      <Card classes={classes}>
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
              {itemData.price}грн
            </Typography>
            <ColorButton
              variant="contained"
              endIcon={<ShoppingCartIcon/>}
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
