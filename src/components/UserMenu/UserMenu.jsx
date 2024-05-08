import classes from "./user-menu.module.scss";
import NavItem from "../NavItem/NavItem";
import {useContext} from "react";
import {ModalsContext, UserContext} from "../../App.jsx";

export default function UserMenu(){
  const {user, logout} = useContext(UserContext);
  const {openModal} = useContext(ModalsContext);

  return (
    <div className={classes['user-menu']}>

      {!user && <NavItem onClick={() => openModal('auth','LOGIN')}>Вход</NavItem>}
      {!user && <NavItem onClick={() => openModal('auth','REGISTER')}>Регистрация</NavItem>}
      {user && <NavItem to={'/profile'}>{user.name}</NavItem>}
      {user && <NavItem onClick={logout}>Выход</NavItem>}

    </div>
  )
}