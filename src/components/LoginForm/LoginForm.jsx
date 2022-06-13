import { useState } from 'react';

import { initialState } from './initialState';

import s from './loginForm.module.scss';

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...form });
    setForm({ ...initialState });
  };

  const { email, password } = form;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className={s.label} htmlFor="">
          Email:
        </label>
        <input
          value={email}
          onChange={handleChange}
          required
          name="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div>
        <label className={s.label} htmlFor="">
          Password:
        </label>
        <input
          value={password}
          onChange={handleChange}
          required
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <button className={s.button} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
