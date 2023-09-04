import './menu-item.scss';
import {Link} from "@inertiajs/react";

const MenuItem = ({icon, name, href}) => {
    const itemIcon = icon
        ? <img src={icon} alt="" className="menu-item__icon"/>
        : null
    return (
        <Link href={route(href)}>
            <div className="menu-item">
                {itemIcon}
                <span className="menu-item__name">{name}</span>
            </div>
        </Link>
    )
}

export default MenuItem;
