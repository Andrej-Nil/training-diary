import classes from './tab-btn.module.scss'

export default function TabBtn({isActive, onClick, children}){
  const cls = isActive ? `${classes['tab-btn']} ${classes['active']}` : classes['tab-btn'];

  return (
    <div onClick={onClick} className={cls}>
      {children}
    </div>
  )
}