import classes from './form.module.scss';


export default function Form({children, ...props}) {
  return (
    <form className={classes.form} {...props} method="POST">
      <div className={classes.form__content}>
        {children}
      </div>
    </form>
  )
}