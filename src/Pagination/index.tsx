import React, { useCallback, useState, memo, ChangeEvent } from "react";
import "./index.css";

export const Pagination = memo(function ({
  totalCount,
  pageSize = 20,
  onChange,
  maxPageCount = 10,
}: {
  totalCount: number;
  pageSize: number;
  onChange: (value: number) => void;
  maxPageCount?: number;
}) {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const totalPages = Math.ceil(totalCount / pageSize);
  maxPageCount = Math.min(totalPages, maxPageCount);

  const clickHandler = useCallback(
    (pageIndex: number) => {
      pageIndex = Math.min(Math.max(1, pageIndex), totalPages);
      setCurrentPageIndex(pageIndex);
      onChange(pageIndex);
    },
    [onChange, totalPages]
  );

  return (
    <div className="pagination">
      <div className="pagination-control">
        <button onClick={() => clickHandler(currentPageIndex - 1)}>
          &lt;&lt;
        </button>
        <input
          type="number"
          value={currentPageIndex}
          min="1"
          max={totalPages}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            clickHandler(Number(e.target.value))
          }
        />
        <button onClick={() => clickHandler(currentPageIndex + 1)}>
          &gt;&gt;
        </button>
      </div>
      <div className="pagination-summary">Total Pages: {totalPages}</div>
    </div>
  );
});
