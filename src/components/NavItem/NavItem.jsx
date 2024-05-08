import classes from './nav-item.module.scss';
import {NavLink} from "react-router-dom";

export default function NavItem({children, to, onClick}){
  function setClasses(isActive) {
    if(isActive) {
      return `${classes['nav-item']} ${classes['active']}`;
    } else {
      return classes['nav-item'];
    }
  }

  return (
    <>
      {to && <NavLink to={to} className={(navData) => setClasses(navData.isActive)}>{children}</NavLink>}
      {onClick && <span onClick={onClick} className={classes['nav-item']}>{children}</span>}
    </>
  )
}
