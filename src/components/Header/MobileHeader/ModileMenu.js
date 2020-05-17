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
import {Link as RouterLink} from "react-router-dom";

import DrawerContent from "./DrawerContent/DrawerContent";

import './MobileMenu.scss';
import {connect} from "react-redux";
import {getCartItemsNum} from "../../../reducers";
import Badge from "@material-ui/core/Badge";

const mapStateToProps = state => ({
  cartItemsNumber: getCartItemsNum(state)
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
          <Toolbar className="mobileToolBar mobileToolBarHeight">
            <Box className="mobileMenu">
              <Typography variant="h6">
                Fresh Flowers
              </Typography>

              <Box>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <RouterLink to="/cart">
                    <Badge badgeContent={this.props.cartItemsNumber} color="error" anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }} max={99}>
                      <ShoppingCartOutlinedIcon/>
                    </Badge>
                  </RouterLink>

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

export default connect(mapStateToProps)(MobileMenu);