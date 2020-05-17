import React from 'react';
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard/ItemCard";
import {ContentPagePropTypes} from "../../propTypes/propTypes";
import {addToCart} from "../../actions";
import {connect} from "react-redux";

export class PagesContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageData: []
    };

    this.fetchPageData();
  }

  fetchData(collectionName) {
    fetch(`/fetchData?collectionName=${collectionName}`).then(response => {
      return response.json();
    }).then(response => {
      if (!response.data) {
        console.error("PagesContent::fetchData : no data was fetched");
        return;
      }

      this.setState({
        ...this.state,
        pageData: response.data
      });
    }).catch(console.error);
  }

  render() {
    return (
      <Grid container>
        {
          this.state.pageData.map(
            (item, index) => (
              <Grid container item justify="center" xs={12} sm={6} lg={4} key={index}>
                <ItemCard itemData={item} onAddItemClick={() => this.props.onAddItemClick(item)}/>
              </Grid>
            )
          )
        }
      </Grid>
    );
  }
}

PagesContent.propTypes = ContentPagePropTypes;

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  onAddItemClick: item => dispatch(addToCart(item))
});

export const PageStoreWrapper = (PageClass) => connect(mapStateToProps, mapDispatchToProps)(PageClass);