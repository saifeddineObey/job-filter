import React, {  useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../card";
import style from "./pagination.module.scss";

function Pagination({ data }) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  const endOffset = itemOffset + itemsPerPage;
  const currentjobs = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={style.body}>
      <div>
        {currentjobs?.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
      {data && <ReactPaginate
        activeClassName={style.active}
        breakClassName={style.breakMe}
        breakLabel={"..."}
        containerClassName={style.pagination}
        disabledClassName={style.disabled}
        marginPagesDisplayed={2}
        nextClassName={style.next}
        nextLabel={
          <h6 className="ms-sm-5">
            Next<i className="bi bi-arrow-right-short mx-2"></i>
          </h6>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        pageClassName={style.paginationPage}
        previousClassName={style.previous}
        previousLabel={
          <h6 className="me-sm-5">
            <i className="bi bi-arrow-left-short mx-2"></i>Previous
          </h6>
        }
      />}
    </div>
  );
}

export default Pagination;
