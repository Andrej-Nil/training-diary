import classes from './textarea.module.scss';

export default function Textarea(props){
  return(
    <textarea className={classes.textarea} {...props}></textarea>
  )
}