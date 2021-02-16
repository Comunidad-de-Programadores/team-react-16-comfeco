import React from "react";
import style from "./ToolTips.module.css";

export function Tooltips(props) {
  return (
    <>
      <span className={style.tool} data-tip={props.data}>
        {props.children}
      </span>
    </>
  );
}
