import PropTypes from 'prop-types';

import s from './list-item.module.scss';

export default function ListItem({ options, onClick }) {
  const [name, number, id] = options;
  return (
    <li className={s.listItem} key={id}>
      {name} - {number}{' '}
      <button
        className={s.button}
        onClick={() => {
          onClick(name);
        }}
      >
        Delete
      </button>
    </li>
  );
}

ListItem.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};
