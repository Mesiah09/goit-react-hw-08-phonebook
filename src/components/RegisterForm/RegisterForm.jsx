import { useState } from 'react';

import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
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

  const { name, email, password } = form;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name:</label>
        <input
          value={name}
          onChange={handleChange}
          required
          name="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div>
        <label htmlFor="">Email:</label>
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
        <label htmlFor="">Password:</label>
        <input
          value={password}
          onChange={handleChange}
          required
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
