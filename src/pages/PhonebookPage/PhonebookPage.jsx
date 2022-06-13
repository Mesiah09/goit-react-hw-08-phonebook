import PhoneBook from 'components/PhoneBook';

import s from './phonebookPage.module.scss';

const PhonebookPage = () => {
  return (
    <div className={s.container}>
      <h2>Phonebook</h2>
      <PhoneBook />
    </div>
  );
};

export default PhonebookPage;
