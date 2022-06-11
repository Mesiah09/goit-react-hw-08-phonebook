import { useState } from 'react';
import s from './form.module.scss';
import PropTypes from 'prop-types';
export default function Form({ onSubmit }) {
  const [data, setData] = useState({ name: '', number: '' });

  const handleChange = e => {
    if (e.target.name === 'name')
      setData(prev => {
        return { ...prev, name: e.target.value };
      });
    else if (e.target.name === 'number')
      setData(prev => {
        return { ...prev, number: e.target.value };
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(data);
    setData({ name: '', number: '' });
  };

  return (
    <form className={s.form} action="" onSubmit={handleSubmit}>
      <label htmlFor="text">Name</label>
      <br />
      <input
        className={s.input}
        onChange={handleChange}
        value={data.name}
        id="text"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <br />
      <label htmlFor="number">Number</label>
      <br />
      <input
        className={s.input}
        onChange={handleChange}
        value={data.number}
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br />
      <button className={s.button} type="submit">
        add contact
      </button>
    </form>
  );
}
Form.defaultProps = {
  onSubmit: function () {},
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
