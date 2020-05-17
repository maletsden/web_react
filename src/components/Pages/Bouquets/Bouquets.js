import {PagesContent, PageStoreWrapper} from "../PagesContent";

class Bouquets extends PagesContent {
  fetchPageData() {
    this.fetchData('bouquets');
  }
}

export default PageStoreWrapper(Bouquets);