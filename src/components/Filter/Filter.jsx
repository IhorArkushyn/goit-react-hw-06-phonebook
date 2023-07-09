import PropTypes from 'prop-types';
import * as S from './Filter.styled';

export function Filter({ filter, onChange }) {
  return (
    <S.Label>
      Find contacts by name
      <S.Input type="text" name="filter" value={filter} onChange={onChange} />
    </S.Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
