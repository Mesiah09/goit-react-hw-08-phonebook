import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from 'components/Header';

import MyRoutes from 'Routes';

import { getCurrentUser } from 'redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <MyRoutes />
    </div>
  );
};

export default App;
