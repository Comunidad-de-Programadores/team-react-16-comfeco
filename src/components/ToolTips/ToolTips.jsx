import React from "react";
import style from "./ToolTips.scss";

function Tooltips(props) {
  return (
    <>
      <span className={style.tool} data-tip={props.data}>
        {props.children}
      </span>
    </>
  );
}

export default Tooltips;
