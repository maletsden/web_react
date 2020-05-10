import React from 'react';

import {Box, Typography} from "@material-ui/core";

import './ReachUs.scss';
import Link from "@material-ui/core/Link";

export default function ReachUs() {
  return (
    <div className="reachUs">

      <Typography variant="h6">
        <b>Напишіть нам:</b>
      </Typography>

      <Box className="reachUsSocialMedias">
        <Link href="https://www.instagram.com/fresh_flowers_/" target="_blank">
          <img src={"/images/socialMedia/instagram.svg"} alt="instagram"/>
        </Link>
        <Link href="https://www.viber.me/fresh_flowers_/" target="_blank">
          <img src={"/images/socialMedia/viber.svg"} alt="viber"/>
        </Link>
        <Link href="https://www.t.me/fresh_flowers_/" target="_blank">
          <img src={"/images/socialMedia/telegram.svg"} alt="telegram"/>
        </Link>
      </Box>

      <Typography variant="h6">
        або зателефонуйте:
      </Typography>

      <Box mb={1}/>

      <Typography variant="h6">
        <b>+ 380 (67) 80 00 797</b>
      </Typography>

    </div>
  );
};
