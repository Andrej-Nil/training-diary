import classes from "./button-group.module.scss";

export default function ButtonGroup({children}) {
  return <div className={classes['button-group']}>{children}</div>

}