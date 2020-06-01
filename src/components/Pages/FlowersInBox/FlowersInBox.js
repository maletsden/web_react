import {PagesContent, PageStoreWrapper} from "../PagesContent";

class FlowersInBox extends PagesContent {
  fetchPageData() {
    this.fetchData('fetchDataForFlowersInBox');
  }
}

export default PageStoreWrapper(FlowersInBox);