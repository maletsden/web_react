import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  SwipeableDrawer,
  Box
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


import './MobileMenu.scss';
import DrawerContent from "./DrawerContent";

import {MainComponentsSizes} from '../../Constants';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: MainComponentsSizes.mobileHeaderHeight.md,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      minHeight: MainComponentsSizes.mobileHeaderHeight.xs,
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: MainComponentsSizes.mobileHeaderHeight.md,
    },
  },
}));

export default function MobileMenu() {
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open);
  };

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const classes = useStyles();
  return (
    <Box>

      <AppBar>
        <Toolbar className={`${classes.toolbar} mobileToolBar`}>
          <Box className="mobileMenu">
            <Typography variant="h6">
              Fresh Flowers
            </Typography>

            <Box>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <ShoppingCartOutlinedIcon/>
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="menu"
                          onClick={toggleDrawer(true)}>
                <MenuIcon/>
              </IconButton>
            </Box>

          </Box>
        </Toolbar>
      </AppBar>

      <React.Fragment>
        <SwipeableDrawer
          anchor={'left'}
          open={drawerState}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableBackdropTransition={!iOS} disableDiscovery={iOS}
        >
          <DrawerContent/>
        </SwipeableDrawer>
      </React.Fragment>

    </Box>
  );

};
