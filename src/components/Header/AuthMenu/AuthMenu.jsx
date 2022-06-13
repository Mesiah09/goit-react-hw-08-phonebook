import { NavLink } from "react-router-dom";

import s from './authMenu.module.scss';

const getActiveLink = ({ isActive }) => {
    return isActive ? `${s.link} ${s.linkActive}` : `${s.link}`
};

const AuthMenu = () => {

    return (
        <ul className={s.menu}>
            <li>
                <NavLink to="/login" className={getActiveLink}>Login</NavLink>
            </li>
            
            <li>
                <NavLink to="/register" className={getActiveLink}>Register</NavLink>
            </li>
        </ul>
    )
};

export default AuthMenu;