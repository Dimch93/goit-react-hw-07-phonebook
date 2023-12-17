import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { selectFilteredContacts } from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/operations';

import { getContacts, getFilter } from '../../redux/selectors';

export const ContactsList = () => {
  // const filteredContacts = useSelector(selectFilteredContacts);

  const filtered = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filtered.toLowerCase())
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contacts}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.list}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={css.btn}
            type="button"
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
