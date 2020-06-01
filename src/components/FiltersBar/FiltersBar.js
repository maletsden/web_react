import React from "react";
import Box from "@material-ui/core/Box";
import FilterModal from "./FilterModal/FilterModal"
import SearchField from "./SearchField/SearchField"
import Grid from "@material-ui/core/Grid";

export default class FiltersBar extends React.Component {
  render() {
    return (
      <div>
        <Grid
          container
          item
          justify="space-between"
          alignItems="center"
          xs={10}
          style={{
            margin: 'auto'
          }}
        >
          <FilterModal/>
          <SearchField/>
        </Grid>

        {/*<Box mb={3}/>*/}
        {/*<hr className="hr85vw"/>*/}
        <Box mb={2}/>
      </div>
    );
  }
}