import React from 'react';
import {Box, Typography, Link} from "@material-ui/core";

import makeStyles from "@material-ui/core/styles/makeStyles";

import { InlineIcon } from '@iconify/react';
import viberIcon from '@iconify/icons-fa-brands/viber';
import telegramIcon from '@iconify/icons-fa-brands/telegram';
import instagramIcon from '@iconify/icons-fa-brands/instagram'

import CopyrightIcon from '@material-ui/icons/Copyright';

import {MainComponentsSizes} from "../Constants";

import './Footer.scss';

const useStyles = makeStyles((theme) => ({
  Footer: {
    minHeight: MainComponentsSizes.mobileFooterHeight.md,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      minHeight: MainComponentsSizes.mobileFooterHeight.xs,
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: MainComponentsSizes.mobileFooterHeight.md,
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer
      className={`${classes.Footer} footer`}
    >
      <Box className="socialMedias">
        <InlineIcon icon={instagramIcon} className="socialMedia socialMedias__instagram"/>
        <InlineIcon icon={viberIcon} className="socialMedia socialMedias__viber"/>
        <InlineIcon icon={telegramIcon} className="socialMedia socialMedias__telegram"/>
      </Box>

      <Box display="flex" justifyContent="space-around" className="footer__sitemap">
        <Typography variant="h6">Доставка</Typography>
        <Typography variant="h6">Каталог</Typography>
        <Typography variant="h6">Співпраця</Typography>
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
