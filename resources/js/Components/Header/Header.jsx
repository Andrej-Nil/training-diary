import './header.scss';
import Container from "@/Components/Container/index.js";
import Logo from "@/Components/Logo/Logo.jsx";
import GuestMenu from "@/Components/GuestMenu/index.js";
import UserMenu from "@/Components/UserMenu/UserMenu.jsx";

const Header = ({auth}) => {
    const menu = auth.user ? <UserMenu {...auth.user}/> : <GuestMenu />;
    const nav = auth.user ? <p>"nav"</p> : null;
    return (
        <div className="header">
            <Container>
                <div className='header__inner'>
                    <Logo/>
                    {nav}
                    {menu}
                </div>
            </Container>
        </div>
    )
}

export default Header;
