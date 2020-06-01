import React from "react";
import FilterListIcon from '@material-ui/icons/FilterList';
import {IconButton, SwipeableDrawer} from "@material-ui/core";
import FilterDrawer from "./FilterDrawer/FilterDrawer";

export default class FilterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerIsOpen: false
    };
  }

  toggleDrawer(event, drawerIsOpen) {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({
      ...this.state,
      drawerIsOpen
    });
  }

  isIOS() {
    return process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  }
  render() {
    return (
      <div>
        <IconButton edge="start" color="inherit"
                    onClick={event => this.toggleDrawer(event, true)}>
          <FilterListIcon/>
        </IconButton>

        <React.Fragment>
          <SwipeableDrawer
            anchor={'right'}
            open={this.state.drawerIsOpen}
            onClose={event => this.toggleDrawer(event, false)}
            onOpen={event => this.toggleDrawer(event, true)}
            disableBackdropTransition={!this.isIOS()} disableDiscovery={this.isIOS()}
          >
            <FilterDrawer/>
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    );
  }
}