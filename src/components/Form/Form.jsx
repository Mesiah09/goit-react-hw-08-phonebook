import { Component } from "react";
import s from "./form.module.scss";
import PropTypes from "prop-types";
export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <form className={s.form} action="" onSubmit={this.handleSubmit}>
        <label htmlFor="text">Name</label>
        <br />
        <input
          className={s.input}
          onChange={this.handleChange}
          value={this.state.name}
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
          onChange={this.handleChange}
          value={this.state.number}
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
}
Form.defaultProps = {
  onSubmit: function () {},
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
