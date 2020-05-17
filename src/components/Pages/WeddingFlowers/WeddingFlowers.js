import React from 'react';
import Grid from "@material-ui/core/Grid";
import {weddingFlowers} from "../../../items_data";
import ItemCard from "../../ItemCard/ItemCard";

export default function WeddingFlowers() {
  return (
    <Grid container>
      {
        weddingFlowers.map(
          (item, index) => (
            <Grid container item justify="center" xs={12} sm={6} lg={4} key={index}>
              <ItemCard itemData={item}/>
            </Grid>
          )
        )
      }
    </Grid>
  );
};
