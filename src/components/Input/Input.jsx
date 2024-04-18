import classes from './input.module.scss';

export default function Input({hasError, ...props}){
  const cls = hasError ? `${classes.input} ${classes.error}` : classes.input;
  return(
    <input className={cls} {...props}/>
  )
}