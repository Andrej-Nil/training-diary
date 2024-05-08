import Logo from "../Logo/Logo";
import classes from './header.module.scss';
import UserMenu from "../UserMenu/UserMenu";
import Nav from "../Nav/Nav";
import {Link} from "react-router-dom";


export default function Header(){
  return (
    <header className={classes.header}>
      <div className={`${classes.header__inner} container`}>

        <Link to='/'>
          <Logo />
        </Link>

        <Nav />

        <UserMenu  />

      </div>
    </header>
  )
}
