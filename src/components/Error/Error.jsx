import style from "./Error.module.scss";

const Error = (props) => {
  return <div className={style.container}>{props.children}</div>;
};

export default Error;
