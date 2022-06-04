import s from "./list-item.module.scss";
export default function ListItem({ contacts, onClick }) {
  return contacts.map((e) => (
    <li className={s.listItem} key={e.id}>
      {e.name} - {e.number}{" "}
      <button
        className={s.button}
        onClick={() => {
          onClick(e.name);
        }}
      >
        Delete
      </button>
    </li>
  ));
}
