import { ReactComponent as LoadingSVG } from "./loading.svg";
import "./index.css";
import { HtmlHTMLAttributes } from "react";

export const Loading = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="loading" {...props}>
      <LoadingSVG></LoadingSVG>
    </div>
  );
};
