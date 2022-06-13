import { NavLink } from 'react-router-dom';

import s from './headerMenu.module.scss';

import { items } from './items';

const getActiveLink = ({ isActive }) => {
  return isActive ? `${s.link} ${s.linkActive}` : `${s.link}`;
};

const HeaderMenu = ({ isLogin }) => {
  const menuItems = items.filter(item => item.private === isLogin);

  const elements = menuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to} className={getActiveLink}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={s.menu}>{elements}</ul>;
};

export default HeaderMenu;
