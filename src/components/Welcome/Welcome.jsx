import classes from './welcome.module.scss';


export default function Welcome({children}){
  return <div className={classes.welcome}>{children}</div>
}