import style from "./Error.module.css";

export const Error = (props) => {
  return <div className={style.container}>{props.children}</div>;
};
