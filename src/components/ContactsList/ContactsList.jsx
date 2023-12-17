import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContacts } from '../../redux/operations';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContacts(id));
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
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
