import React from 'react';
import ReachUs from "../Contacts/ReachUs";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";

export default function Delivery() {
  return (
    <div style={{
      width: '85vw',
      margin: 'auto'
    }}>
      <Typography variant="h4" align="center">
        Доставка
      </Typography>

      <Box mb={2}/>

      <hr className="hr85vw"/>

      <Box mb={3}/>

      <Typography variant="h6" align="center">
        Одразу після здійснення замовлення онлайн або у нашому магазині наш кур'єр доставить ваше замовлення в будь-яке місце в межах міста Тернополя
      </Typography>

      <Box mb={4}/>

      <hr className="hr85vw"/>

      <Box mb={2}/>

      <Typography variant="h6" align="center">
        Доставка <b>безкоштовна</b> при замовленні понад 500 грн
      </Typography>

      <Box mb={2}/>

      <hr className="hr85vw"/>

      <Box mb={2}/>

      <ReachUs/>

      <Box mb={4}/>
    </div>
  );
};
