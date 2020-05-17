import {PagesContent, PageStoreWrapper} from "../PagesContent";

class WeddingFlowers extends PagesContent {
  fetchPageData() {
    this.fetchData('weddingFlowers');
  }
}

export default PageStoreWrapper(WeddingFlowers);