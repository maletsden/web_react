import React from 'react';

import Header from './components/Header/Header';
import ItemCard from './components/ItemCard/ItemCard';
import Grid from '@material-ui/core/Grid';
import {Box} from "@material-ui/core";

const items = [
  {
    img: {
      path: process.env.PUBLIC_URL + '/images/img1.jpg',
      title: 'Рожева гіпсофіла',
      height: 300
    },
    price: 450
  },
  {
    img: {
      path: process.env.PUBLIC_URL + '/images/img2.jpg',
      title: 'Рожеві тюльпани'
    },
    price: 500
  },
  {
    img: {
      path: process.env.PUBLIC_URL + '/images/img3.jpg',
      title: 'Кущові троянди',
      height: '300'
    },
    price: 450
  },
  {
    img: {
      path: process.env.PUBLIC_URL + '/images/img4.jpg',
      title: 'Букет з альстромерій'
    },
    price: 600
  },
  {
    img: {
      path: process.env.PUBLIC_URL + '/images/img5.jpg',
      title: 'Рожеві троянди'
    },
    price: 350
  }
];

function App() {
  return (
    <div className="App">
      <Header/>

      <Grid container>
        {
          items.map(
            (item, index) => (
              <Grid container item justify="center" xs={12} sm={6} lg={4}>
                <ItemCard key={index} itemData={item} />
              </Grid>
            )
          )
        }
      </Grid>
    </div>
  );
}

export default App;
