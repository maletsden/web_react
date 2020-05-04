import React from 'react';

import './Main.scss';
import makeStyles from "@material-ui/core/styles/makeStyles";

import {MainComponentsSizes} from "../Constants";
import Bouquets from "./Bouquests/Bouquets";

const useStyles = makeStyles((theme) => ({
  Main: {
    marginTop: MainComponentsSizes.mobileHeaderHeight.md * 1.5,
    minHeight: `calc(100% - ${MainComponentsSizes.mobileFooterHeight.md}px)`,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      marginTop: MainComponentsSizes.mobileHeaderHeight.xs * 1.5,
      minHeight: `calc(100% - ${MainComponentsSizes.mobileFooterHeight.xs}px)`,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: MainComponentsSizes.mobileHeaderHeight.sm * 1.5,
      minHeight: `calc(100% - ${MainComponentsSizes.mobileFooterHeight.sm}px)`,
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <main className={classes.Main}>
      {/* TODO: add Router*/}
      <Bouquets/>
    </main>
  );
};
