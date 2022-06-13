import { Link } from 'react-router-dom';

import HeaderMenu from './HeaderMenu';
import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';

import useLogin from 'shared/hooks/useLogin';

import s from './header.module.scss';

const Header = () => {
  const isLogin = useLogin();

  return (
    <nav>
      <div className={s.menu}>
        <Link to="/">Logo</Link>
        <HeaderMenu isLogin={isLogin} />
        {isLogin && <UserMenu />}
        {!isLogin && <AuthMenu />}
      </div>
    </nav>
  );
};

export default Header;
