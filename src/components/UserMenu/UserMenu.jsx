import classes from "./user-menu.module.scss";
import NavItem from "../NavLink/NavItem";
import {useContext} from "react";
import {UserContext} from "../../App.jsx";

export default function UserMenu(props){
const [user] = useContext(UserContext);
  const {changePage, openAuthModal, logout} = props;

  return (
    <div className={classes['user-menu']}>
      {!user && <NavItem onClick={() => openAuthModal('LOGIN')}>Вход</NavItem>}
      {!user && <NavItem onClick={() => openAuthModal('REGISTER')}>Регистрация</NavItem>}
      {user && <NavItem onClick={() => changePage('PROFILE')}>{user.name}</NavItem>}
      {user &&  <NavItem onClick={logout}>Выход</NavItem>}
    </div>
  )
}