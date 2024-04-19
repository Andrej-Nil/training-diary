import classes from './text.module.scss';

export default function Text({children}) {
  return <p className={classes.text}>{children}</p>
}