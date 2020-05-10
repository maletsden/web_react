import React from 'react';

import './Main.scss';
import makeStyles from "@material-ui/core/styles/makeStyles";

import {MainComponentsSizes} from "../Constants";
import Bouquets from "./Bouquests/Bouquets";

const useStyles = makeStyles((theme) => ({
  Main: {
    paddingTop: MainComponentsSizes.mobileHeaderHeight.md * 1.5,
    minHeight: `calc(100vh - ${MainComponentsSizes.mobileFooterHeight.md}px)`,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      paddingTop: MainComponentsSizes.mobileHeaderHeight.xs * 1.5,
      minHeight: `calc(100vh - ${MainComponentsSizes.mobileFooterHeight.xs}px)`,
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: MainComponentsSizes.mobileHeaderHeight.sm * 1.5,
      minHeight: `calc(100vh - ${MainComponentsSizes.mobileFooterHeight.sm}px)`,
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <main className={`${classes.Main} mainContainer`}>
      {/* TODO: add Router*/}
      <Bouquets/>
    </main>
  );
};
