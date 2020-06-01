import {PagesContent, PageStoreWrapper} from "../PagesContent";

class WeddingFlowers extends PagesContent {
  fetchPageData() {
    this.fetchData('fetchDataForWeddingFlowers');
  }
}

export default PageStoreWrapper(WeddingFlowers);