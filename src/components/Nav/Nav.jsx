import NavItem from "../NavItem/NavItem";
import classes from "./nav.module.scss"
import {UserContext} from "../../App.jsx";
import {useContext} from "react";

export default function Nav(){
  const {user} = useContext(UserContext);

  return (
    <nav className={classes.nav}>
      {user && <NavItem to='/training'>Тренировка</NavItem>}
      {user && <NavItem to='/workout'>История</NavItem>}
      <NavItem to='/about'>О нас</NavItem>
    </nav>
  )
}