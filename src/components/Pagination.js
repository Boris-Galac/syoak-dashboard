import React from "react";

const Pagination = () => {
  return (
    <>
      <div class="pagination d-flex" role="navigation" aria-label="Pagination">
        <a
          href="#"
          class="pagination__link pagination__link--previous"
          rel="prev"
          aria-label="Previous page"
        >
          <img
            src="./assets/icons/pagination-left-icon.svg"
            aria-hidden="true"
          />
        </a>

        <ul class="pagination__list d-flex">
          <li>
            <a
              href="#"
              class="pagination__link pagination__link--active"
              aria-current="page"
            >
              1
            </a>
          </li>
          <li>
            <a href="#" class="pagination__link">
              2
            </a>
          </li>
          <li>
            <a href="#" class="pagination__link">
              3
            </a>
          </li>
        </ul>

        <a
          href="#"
          class="pagination__link pagination__link--next"
          rel="next"
          aria-label="Next page"
        >
          <img
            src="./assets/icons/pagination-right-icon.svg"
            aria-hidden="true"
          />
        </a>
      </div>
    </>
  );
};

export default Pagination;
