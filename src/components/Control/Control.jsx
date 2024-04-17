import classes from './control.module.scss';
import Input from "../Input/Input";

export default function Control({label, ...props}){
  return (
    <div className={classes.control}>
      <label className={classes.control__label} htmlFor={props.id}>{label}</label>
      <Input {...props}/>
    </div>
  )
}