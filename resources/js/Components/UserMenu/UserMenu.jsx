import Menu from "@/Components/Menu/Menu.jsx";
import MenuItem from "@/Components/MenuItem/MenuItem.jsx";

const UserMenu = () => {
    return (
        <Menu>
            <MenuItem name="Войти" href="login" />
            <MenuItem name="Выход" href="logout"/>
        </Menu>
    )
}

export default UserMenu;
