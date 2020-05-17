import React from 'react';
import {Box, Typography, Link} from "@material-ui/core";

import { InlineIcon } from '@iconify/react';
import viberIcon from '@iconify/icons-fa-brands/viber';
import telegramIcon from '@iconify/icons-fa-brands/telegram';
import instagramIcon from '@iconify/icons-fa-brands/instagram'

import CopyrightIcon from '@material-ui/icons/Copyright';

import './Footer.scss';
import {Link as RouterLink} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footerHeight">
      <Box className="socialMedias">
        <Link href="https://www.instagram.com/fresh_flowers_/" target="_blank" color="inherit">
          <InlineIcon icon={instagramIcon} className="socialMedia"/>
        </Link>
        <Link href="https://www.viber.me/fresh_flowers_/" target="_blank" color="inherit">
          <InlineIcon icon={viberIcon} className="socialMedia"/>
        </Link>
        <Link href="https://www.t.me/fresh_flowers_/" target="_blank" color="inherit">
          <InlineIcon icon={telegramIcon} className="socialMedia"/>
        </Link>
      </Box>

      <Box display="flex" justifyContent="space-around" className="footer__sitemap">
        <RouterLink to="/delivery">
          <Typography variant="h6">Доставка</Typography>
        </RouterLink>
        <RouterLink to="/bouquets">
          <Typography variant="h6">Каталог</Typography>
        </RouterLink>
        <RouterLink to="/cooperation">
          <Typography variant="h6">Співпраця</Typography>
        </RouterLink>
      </Box>

      <Box className="footer__author">
        <Typography variant="h6">
          Created by <Link
            href="https://github.com/maletsden"
            color="inherit" underline="always" target="_blank"
            className="footer__author-link"
          > Denys Maletskyi  </Link>
        </Typography>
      </Box>

      <Box className="footer__copyright">
        <CopyrightIcon/>
        <Typography variant="h6"> Fresh Flowers </Typography>
      </Box>
    </footer>
  );
};
