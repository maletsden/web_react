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
import {withStyles} from "@material-ui/core/styles";

import DrawerContent from "./DrawerContent/DrawerContent";
import {MainComponentsSizes} from '../../Constants';

import './MobileMenu.scss';

const useStyles = (theme) => ({
  toolbar: {
    minHeight: MainComponentsSizes.mobileHeaderHeight.md,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      minHeight: MainComponentsSizes.mobileHeaderHeight.xs,
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: MainComponentsSizes.mobileHeaderHeight.md,
    },
  },
});

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerState: false
    }
  }

  toggleDrawer(event, drawerState) {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({
      drawerState
    });
  }

  isIOS() {
    return process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  render() {
    return (
      <Box>

        <AppBar>
          <Toolbar className={`${this.props.classes.toolbar} mobileToolBar`}>
            <Box className="mobileMenu">
              <Typography variant="h6">
                Fresh Flowers
              </Typography>

              <Box>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <ShoppingCartOutlinedIcon/>
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu"
                            onClick={event => this.toggleDrawer(event, true)}>
                  <MenuIcon/>
                </IconButton>
              </Box>

            </Box>
          </Toolbar>
        </AppBar>

        <React.Fragment>
          <SwipeableDrawer
            anchor={'left'}
            open={this.state.drawerState}
            onClose={event => this.toggleDrawer(event, false)}
            onOpen={event => this.toggleDrawer(event, true)}
            disableBackdropTransition={!this.isIOS()} disableDiscovery={this.isIOS()}
          >
            <DrawerContent/>
          </SwipeableDrawer>
        </React.Fragment>

      </Box>
    );
  }
}

export default withStyles(useStyles)(MobileMenu);