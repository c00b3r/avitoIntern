import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Pagination.css";

const Pagination = ({ page, limit, setPage, setLimit }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1) {
      setPage(newPage);
    }
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
  };

  return (
    <div className="pagination-wrapper">
      <button onClick={() => handlePageChange(page - 1)}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Prev
      </button>
      <button onClick={() => handlePageChange(page + 1)}>
        Next <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
      <select
        className="select-wrapper"
        value={limit}
        onChange={(e) => handleLimitChange(e.target.value)}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default Pagination;
