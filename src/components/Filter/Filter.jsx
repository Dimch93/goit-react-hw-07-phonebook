import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/sliceFilter';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <>
      <label htmlFor="" className={css.label}>
        Find contacts by name
        <input
          value={filter}
          onChange={onChangeFilter}
          type="text"
          name="filter"
          placeholder="Find contacts by name"
        />
      </label>
    </>
  );
};
