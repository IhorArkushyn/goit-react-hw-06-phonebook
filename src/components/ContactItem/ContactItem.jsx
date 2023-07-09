import PropTypes from 'prop-types';
import * as S from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <S.Item key={id}>
      <p>
        {name}: {number}
      </p>
      <S.Button type="button" onClick={() => onClick(id)}>
        Delete
      </S.Button>
    </S.Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
