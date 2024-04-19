import classes from './copyright.module.scss';

export default function Copyright() {
  const date = new Date().getFullYear();
  return (
    <div className={classes.copyright}>
      © <a className={classes.copyright__link} href='https://vk.com/andrejnill' target="_blank">AndrejNill</a> 2024-{date}
    </div>
  )
}