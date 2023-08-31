import style from './filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import { getFilter } from 'redux/selector';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value;
    dispatch(filterChange(value));
  };

  return (
    <div className={style.searchContainer}>
      <label className={style.search}>
        <input
          type="text"
          name="filter"
          placeholder="Search"
          className={style.inputName}
          title="Enter search name"
          onChange={onChange}
          value={filter}
        />
      </label>
    </div>
  );
};

export default Filter;
