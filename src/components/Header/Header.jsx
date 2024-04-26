import Logo from "../Logo/Logo";
import classes from './header.module.scss';
import UserMenu from "../UserMenu/UserMenu";
import Nav from "../Nav/Nav";

export default function Header(props){
  const {openModal, logout, changePage, page} = props;

  return (
    <header className={classes.header}>
      <div className={`${classes.header__inner} container`}>

        <Logo onClick={() => changePage('HOME')}/>

        <Nav changePage={changePage} page={page}/>

        <UserMenu
          openModal={openModal}
          changePage={changePage}
          logout={logout}
        />
      </div>
    </header>
  )
}
