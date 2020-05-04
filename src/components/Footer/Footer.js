import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

import './Footer.scss';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {MainComponentsSizes} from "../Constants";

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
  innsdinoisd
    </footer>
  );
};
