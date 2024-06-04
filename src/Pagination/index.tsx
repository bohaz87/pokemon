import React, { useCallback, useState } from "react";
import "./index.css";

export function Pagination({
  totalCount,
  pageSize = 20,
  onChange,
}: {
  totalCount: number;
  pageSize: number;
  onChange: (value: number) => void;
}) {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const totalPages = Math.ceil(totalCount / pageSize);

  const arr: (number | string)[] = [];
  for (let i = 0; i < totalPages; i++) {
    arr.push(i + 1);
  }

  const clickHandler = useCallback(
    (i: number) => {
      setCurrentPageIndex(i);
      onChange(i - 1);
    },
    [onChange]
  );

  return (
    <div className="pagination">
      {arr.map((pageIndex) =>
        pageIndex === "..." ? (
          pageIndex
        ) : (
          <button
            key={pageIndex}
            className={currentPageIndex === pageIndex ? "current" : ""}
            onClick={() => clickHandler(pageIndex as number)}
          >
            {pageIndex}
          </button>
        )
      )}
    </div>
  );
}
