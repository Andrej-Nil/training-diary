import Menu from "@/Components/Menu/Menu.jsx";
import MenuItem from "@/Components/MenuItem/MenuItem.jsx";
import icon from '../../../image/icons/user.svg'

const UserMenu = (props) => {
const {name} = props;
    return (
        <Menu>
            <MenuItem icon={icon} name={name} href="login" />
            <MenuItem name="Выход" href="logout"/>
        </Menu>
    )
}

export default UserMenu;
