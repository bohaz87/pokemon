import { ReactComponent as LoadingSVG } from "./loading.svg";
import "./index.css";

export const Loading = (props) => {
  return (
    <div className="loading" {...props}>
      <LoadingSVG></LoadingSVG>
    </div>
  );
};
