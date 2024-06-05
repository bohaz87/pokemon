import { ReactComponent as LoadingSVG } from "./loading.svg";
import { HtmlHTMLAttributes } from "react";

export const Loading = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="flex items-center justify-center w-100 min-h-100"
      {...props}
    >
      <LoadingSVG></LoadingSVG>
    </div>
  );
};
