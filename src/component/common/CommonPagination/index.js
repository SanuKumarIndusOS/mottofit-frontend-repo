import React from "react";
import "./style.scss";
import Pagination from "react-js-pagination";
const CommonPagination = (props) => {
  let { pageMetaData = {}, total = 0, pageChange = {} } = props;
  return (
    <div class="common-pagination">
      {pageMetaData && pageMetaData.totalPages > 1 ? (
        <Pagination
          totalPosts={total}
          activePage={pageMetaData.page}
          itemsCountPerPage={pageMetaData.chunk}
          totalItemsCount={pageMetaData.total}
          pageRangeDisplayed={3}
          hideFirstLastPages={true}
          itemClass="page-item"
          linkClass="page-link"
          innerClass="custom-pagination pagination pt-2"
          nextPageText="»"
          prevPageText="«"
          onChange={(e) => pageChange(e)}
        />
      ) : null}
    </div>
  );
};
export default CommonPagination;
