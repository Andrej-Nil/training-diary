import NavItem from "../NavItem/NavItem";
import classes from "./nav.module.scss"
import {ModalsContext, UserContext} from "../../App.jsx";
import {useContext} from "react";

export default function Nav(){
  const {user} = useContext(UserContext);
  const {openModal} = useContext(ModalsContext);

  return (
    <nav className={classes.nav}>
      {(user && user.currentWorkout)
        ? <NavItem to={`/workouts/${user.currentWorkout}`}>Тренировка</NavItem>
        : <NavItem onClick={() => openModal('create')}>Создать</NavItem>
      }
      {user && <NavItem to='/workouts'>История</NavItem>}
      <NavItem to='/about'>О нас</NavItem>
    </nav>
  )
}