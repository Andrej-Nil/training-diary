import classes from './form.module.scss';


export default function Form({action, children}) {
  return (
    <form className={classes.form} action={action} method="POST">
      <div className={classes.form__content}>
        {children}
      </div>
    </form>
  )
}