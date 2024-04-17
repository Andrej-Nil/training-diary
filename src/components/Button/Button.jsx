import classes from './button.module.scss';

export default function Button({children, onClick, type, ...props}){

  return (
    <button {...props} onClick={onClick} className={`${classes.btn} ${classes.action}`}>{children}</button>
  )
}