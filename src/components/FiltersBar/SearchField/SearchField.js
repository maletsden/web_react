import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
export default class SearchField extends React.Component {
  render() {
    return (
      <div>
        <Grid
          container
          alignItems="center"
        >
          <TextField placeholder="Пошук"/>
          <Box mr={1}/>
          <SearchIcon/>
        </Grid>
      </div>
    );
  }
}