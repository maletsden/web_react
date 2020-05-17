import {PagesContent, PageStoreWrapper} from "../PagesContent";

class FlowersInBox extends PagesContent {
  fetchPageData() {
    this.fetchData('flowersInBox');
  }
}

export default PageStoreWrapper(FlowersInBox);