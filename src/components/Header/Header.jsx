import Logo from "../Logo/Logo";
import classes from './header.module.scss';
import UserMenu from "../UserMenu/UserMenu";
import Nav from "../Nav/Nav";
import {useContext} from "react";
import {UserContext} from "../../App.jsx";



export default function Header(props){
  const user = useContext(UserContext);
  const { changePage, openAuthModal } = props;



  return (
    <header className={classes.header}>
      <div className={`${classes.header__inner} container`}>

        <Logo onClick={() => changePage('HOME')}/>

        <Nav changePage={changePage}/>

        <UserMenu
          openAuthModal={openAuthModal}
          changePage={changePage}
        />
      </div>
    </header>
  )
}
