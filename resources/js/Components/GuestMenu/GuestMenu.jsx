import Menu from "@/Components/Menu/Menu.jsx";
import {Link} from "@inertiajs/react";
import MenuItem from "@/Components/MenuItem/MenuItem.jsx";

const GuestMenu = () => {
    return (
       <Menu >
               <MenuItem name="Войти" href="login" />
               <MenuItem name="Регистрация" href="register"/>
       </Menu>
    )
}

export default GuestMenu;
