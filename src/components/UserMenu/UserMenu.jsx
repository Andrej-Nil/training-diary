import classes from "./user-menu.module.scss";
import NavItem from "../NavItem/NavItem";
import {useContext} from "react";
import {ModalsContext, UserContext} from "../../App.jsx";

export default function UserMenu(props){
  const [user] = useContext(UserContext);
  const {openModal} = useContext(ModalsContext);
  const {changePage, logout} = props;

  return (
    <div className={classes['user-menu']}>
      {!user && <NavItem onClick={() => openModal('auth','LOGIN')}>Вход</NavItem>}
      {!user && <NavItem onClick={() => openModal('auth','REGISTER')}>Регистрация</NavItem>}
      {user && <NavItem onClick={() => changePage('PROFILE')}>{user.name}</NavItem>}
      {user && <NavItem onClick={logout}>Выход</NavItem>}
    </div>
  )
}