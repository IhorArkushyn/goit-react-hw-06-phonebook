import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import * as S from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <S.Label>
      Find contacts by name
      <S.Input type="text" name="filter" value={filter} onChange={onChange} />
    </S.Label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { getFilter, setFilter } from 'redux/filterSlice';
// import css from './Filter.module.css';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(getFilter);

//   const onChange = e => {
//     dispatch(setFilter(e.target.value));
//   };
//   return (
//     <label className={css.contactLabel}>
//       Find contacts by name
//       <input
//         className={css.contactInput}
//         type="text"
//         name={filter}
//         value={filter}
//         onChange={onChange}
//       />
//     </label>
//   );
// };

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};
