import React from 'react';
import {ItemsData} from "../../../items_data";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../../ItemCard/ItemCard";

export default function Bouquets() {
  return (
    <Grid container>
      {
        ItemsData.map(
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
