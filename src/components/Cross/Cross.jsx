import classes from './cross.module.scss'

export default function Cross(){
  return(
    <span className={classes.cross}>
      <span className={`${classes.cross__line} ${classes.one}`}></span>
      <span className={`${classes.cross__line} ${classes.two}`}></span>
    </span>

  )
}