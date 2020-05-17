import React from 'react';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import {Box, Typography} from "@material-ui/core";

import './Contacts.scss';

import Card from "@material-ui/core/Card";
import ReachUs from "./ReachUs";

export default function Contacts() {

  const shopCoordinates = [49.548271, 25.593429];

  return (
    <div className="contactsMobile">
      <ReachUs/>

      <Box mb={3}/>

      <hr className="hr85vw"/>


      <Box mb={2}/>

      <Typography variant="h6" align="center">
        Адреса магазину:
      </Typography>

      <Box mb={2}/>

      <Typography variant="h6" align="center">
        м. Тернопіль, вул. Шептицького, 6
      </Typography>

      <Box mb={3}/>

      <hr className="hr85vw"/>


      <Box mb={2}/>

      <Typography variant="h6" align="center">
        Ми на карті:
      </Typography>

      <Box mb={2}/>

      <Card className="contactsMapMobile">
        <Map
          center={shopCoordinates}
          zoom={17}
          provider={(x, y, z) => `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`}
        >
          <Marker anchor={shopCoordinates} payload={1}/>
        </Map>
      </Card>

      <Box mb={4}/>
    </div>
  );
};
