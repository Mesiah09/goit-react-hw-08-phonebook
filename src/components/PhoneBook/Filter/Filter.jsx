import PropTypes from 'prop-types';

import s from './filter.module.scss';

const Filter = ({ changeFilter, filter }) => {
  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        onChange={changeFilter}
        value={filter}
        type="text"
        name="filter"
      />
    </div>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Filter;
