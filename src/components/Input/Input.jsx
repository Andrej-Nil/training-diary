import classes from './input.module.scss';

export default function Input({hasError, ...props}){
  console.log(props)
  const cls = hasError ? `${classes.input} ${classes.error}` : classes.input;
  return(
    <input className={cls} {...props}/>
  )
}