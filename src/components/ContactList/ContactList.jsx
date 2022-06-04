import ListItem from "./ListItem";
import PropTypes from "prop-types";
import s from "./contact-list.module.scss";
export default function ContactList({ contacts, onClick }) {
  return (
    <ul className={s.list}>
      <ListItem contacts={contacts} onClick={onClick} />
    </ul>
  );
}
ContactList.defaultProps = {
  onClick: function () {},
  contacts: [],
};
ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
