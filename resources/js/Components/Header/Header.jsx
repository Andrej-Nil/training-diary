import './header.scss';
import Container from "@/Components/Container/index.js";
import Logo from "@/Components/Logo/Logo.jsx";
import GuestMenu from "@/Components/GuestMenu/index.js";

const Header = ({auth}) => {
    const menu = auth.user ? "user" : <GuestMenu />;
    const nav = auth.user ? "nav" : null;
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
