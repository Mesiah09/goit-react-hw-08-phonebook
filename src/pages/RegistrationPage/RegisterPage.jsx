import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import RegisterForm from 'components/RegisterForm';

import { signup } from 'redux/auth/auth-operations';
import useLogin from 'shared/hooks/useLogin';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) {
      navigate('/phonebook');
    }
  }, [isLogin, navigate]);

  const registerUser = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h2>Register Page</h2>
      <RegisterForm onSubmit={registerUser} />
    </div>
  );
};

export default RegisterPage;
