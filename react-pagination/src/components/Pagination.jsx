import React from "react";

const Pagination = ({ pageNo, setPageNo }) => {
  const prevThreeNoArr = Array.from(
    { length: 3 },
    (_, index) => pageNo - 1 - index
  )
    .filter((value) => value > 0)
    .reverse();

  const nextFourNoArr = Array.from({ length: 4 }, (_, index) => pageNo + index);

  const paginationArr = [...prevThreeNoArr, ...nextFourNoArr];

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handleBack = () => {
    setPageNo(pageNo - 1);
  };

  return (
    <div className="pagination-container">
      {pageNo > 1 ? (
        <div onClick={handleBack} className="page-btn">
          {"<"}
        </div>
      ) : (
        ""
      )}
      {paginationArr.map((value, index) => {
        return <div onClick={() => setPageNo(value)} className={value === pageNo ? `page-btn active` : `page-btn`} key={index}>{value}</div>;
      })}

      <div onClick={handleNext} className="page-btn">
        {">"}
      </div>
    </div>
  );
};

export default Pagination;
