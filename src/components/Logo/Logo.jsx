import icon from '/src/assets/img/logo.svg'
import classes from './logo.module.scss';
export default function Logo({onClick}){
    return (
      <div onClick={onClick} className={classes.logo}>
        <img className={classes.logo__img} src={icon} alt="logo"/>
        <p className={classes.logo__title}>
          <span className={classes['logo__first-word']}>Training</span>
          <span className={classes['logo__second-word']}>Diary</span>
        </p>
      </div>
    )
}