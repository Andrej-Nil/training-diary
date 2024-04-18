import classes from './button.module.scss';

export default function Button({children, ...props}){

  return (
    <button {...props} className={`${classes.btn} ${classes.action}`}>{children}</button>
  )
}