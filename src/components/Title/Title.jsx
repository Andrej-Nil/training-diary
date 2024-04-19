import classes from './title.module.scss';

export default function Title({children}) {
  return  <h1 className={classes.title}>{children}</h1>

}