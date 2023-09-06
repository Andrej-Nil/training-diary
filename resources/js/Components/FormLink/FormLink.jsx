import './form-link.scss';
import {Link} from "@inertiajs/react";

const FormLink = (props) => {
    const {href, text} = props
    return (
        <Link href={route(href)} >
            <span className="form-link">{text}</span>
        </Link>
    )
}

export default FormLink;
