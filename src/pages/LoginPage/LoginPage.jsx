import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginForm from 'components/LoginForm';

import { login } from 'redux/auth/auth-operations';
import useLogin from 'shared/hooks/useLogin';

// import styles from './login-page.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) {
      navigate('/phonebook');
    }
  }, [isLogin, navigate]);

  const loginUser = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onSubmit={loginUser} />
    </div>
  );
};

export default LoginPage;
