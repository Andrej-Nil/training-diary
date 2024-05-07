import Logo from "../Logo/Logo";
import classes from './header.module.scss';
import UserMenu from "../UserMenu/UserMenu";
import Nav from "../Nav/Nav";
import {Link} from "react-router-dom";


export default function Header(props){
  const { logout, changePage, page} = props;

  return (
    <header className={classes.header}>
      <div className={`${classes.header__inner} container`}>
      <Link to='/'>
        <Logo />
      </Link>


        <Nav changePage={changePage} page={page}/>

        <UserMenu
          changePage={changePage}
          logout={logout}
        />
      </div>
    </header>
  )
}
