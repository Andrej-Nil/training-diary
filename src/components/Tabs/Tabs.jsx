import classes from './tabs.module.scss'

export default function Tabs({children}){
  return (
    <div className={classes.tabs}>
      {children}
    </div>
  )
}