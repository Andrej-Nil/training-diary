import Logo from "../Logo/Logo";
import classes from './header.module.scss';
import UserMenu from "../UserMenu/UserMenu";
import Nav from "../Nav/Nav";

export default function Header(props){
  const { changePage, openAuthModal, logout } = props;

  return (
    <header className={classes.header}>
      <div className={`${classes.header__inner} container`}>

        <Logo onClick={() => changePage('HOME')}/>

        <Nav changePage={changePage}/>

        <UserMenu
          openAuthModal={openAuthModal}
          changePage={changePage}
          logout={logout}
        />
      </div>
    </header>
  )
}
