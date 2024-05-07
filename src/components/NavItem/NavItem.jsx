import classes from './nav-item.module.scss';
import {NavLink} from "react-router-dom";

export default function NavItem({children, to}){
  function setClasses(isActive) {
    if(isActive) {
      return `${classes['nav-item']} ${classes['active']}`;
    } else {
      return classes['nav-item'];
    }
  }

  return <NavLink to={to} className={(navData) => setClasses(navData.isActive)}>{children}</NavLink>
}
