import PropTypes from "prop-types";
import s from "./filter.module.scss";
export default function Filter({ onChange, value }) {
  return (
    <div className={s.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <br />
      <input
        className={s.input}
        onChange={onChange}
        type="text"
        name="filter"
        id="filter"
        value={value}
      />
    </div>
  );
}
Filter.defaultProps = {
  onChange: function () {},
  value: "",
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
