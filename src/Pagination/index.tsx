import React, { useCallback, useState, memo, ChangeEvent } from "react";
import { Button } from "../Button";

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
    <div className="my-4 flex gap-4 flex-wrap items-center justify-between">
      <div className="grow flex gap-2">
        <Button onClick={() => clickHandler(currentPageIndex - 1)}>
          &lt;&lt;
        </Button>
        <input
          type="number"
          value={currentPageIndex}
          min="1"
          max={totalPages}
          className="px-[1em] rounded-lg border border-pink-500 focus:outline-none focus:ring focus:ring-pink-300"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            clickHandler(Number(e.target.value))
          }
        />
        <Button onClick={() => clickHandler(currentPageIndex + 1)}>
          &gt;&gt;
        </Button>
      </div>
      <div className="text-base">Total Pages: {totalPages}</div>
    </div>
  );
});
