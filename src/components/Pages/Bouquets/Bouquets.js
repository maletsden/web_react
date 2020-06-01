import React from "react";
import {PagesContent, PageStoreWrapper} from "../PagesContent";
import FiltersBar from "../../FiltersBar/FiltersBar";

class Bouquets extends PagesContent {
  fetchPageData() {
    this.fetchData('fetchDataForBouquets');
  }

  render() {
    return (
      <div>
        <FiltersBar/>
        {super.render()}
      </div>
    );
  }
}

export default PageStoreWrapper(Bouquets);
