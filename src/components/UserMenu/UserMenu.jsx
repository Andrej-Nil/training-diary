import classes from "./user-menu.module.scss";
import NavItem from "../NavLink/NavItem";
import {useContext} from "react";
import {UserContext} from "../../App.jsx";

export default function UserMenu(props){
const user = useContext(UserContext);
  const {changePage, openAuthModal} = props;

  return (
    <div className={classes['user-menu']}>
      {!user && <NavItem onClick={() => openAuthModal('LOGIN')}>Вход</NavItem>}
      {!user && <NavItem onClick={() => openAuthModal('REGISTER')}>Регистрация</NavItem>}
      {user && <NavItem onClick={() => changePage('PROFILE')}>Name</NavItem>}
      {user &&  <NavItem onClick={() => {}}>Выход</NavItem>}
    </div>
  )
}