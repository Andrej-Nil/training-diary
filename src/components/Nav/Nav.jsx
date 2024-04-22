import NavItem from "../NavItem/NavItem";
import classes from "./nav.module.scss"
import {UserContext} from "../../App.jsx";
import {useContext} from "react";


export default function Nav(props){
  const {changePage, page} =  props;
  const [user] = useContext(UserContext);

  return (
    <nav className={classes.nav}>
        {user && <NavItem active={page === 'TRAINING'} onClick={() => changePage('TRAINING')}>Тренировка</NavItem>}
        {user && <NavItem active={page === 'WORKOUTS'} onClick={() => changePage('WORKOUTS')}>История</NavItem>}
        <NavItem active={page === 'ABOUT'} onClick={() => changePage('ABOUT')}>О нас</NavItem>
    </nav>
  )
}