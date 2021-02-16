import style from "./Error.scss";

const Error = (props) => {
  return <div className={style.container}>{props.children}</div>;
};

export default Error;
