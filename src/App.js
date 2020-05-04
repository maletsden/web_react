import React from 'react';

import Grid from '@material-ui/core/Grid';

import Header from './components/Header/Header';
import ItemCard from './components/ItemCard/ItemCard';

import {ItemsData} from './items_data.json';
import Box from "@material-ui/core/Box";

function App() {
  return (
    <div className="App">
      <Header/>


      <Box mt={10}/>

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
    </div>
  );
}

export default App;
