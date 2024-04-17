import NavItem from "../NavLink/NavItem";
import classes from "./nav.module.scss"
import {UserContext} from "../../App.jsx";
import {useContext} from "react";


export default function Nav(props){
  const {changePage} =  props;
  const user = useContext(UserContext)

  return (
    <nav className={classes.nav}>
        <NavItem onClick={() => changePage('HOME')}>Главная</NavItem>
        { user && <NavItem onClick={() => changePage('WORKOUTS')}>Тренировки</NavItem> }
        <NavItem onClick={() => changePage('ABOUT')}>О нас</NavItem>
    </nav>
  )
}