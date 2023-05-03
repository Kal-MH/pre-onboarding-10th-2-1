import styled from 'styled-components';
import { ReactComponent as MagnifyingGlassIcon } from '../../assets/magnifying-glass.svg';

const Button = () => {
  return (
    <S.Button>
      <div style={{ width: '21px', height: ' 21px' }}>
        <MagnifyingGlassIcon />
      </div>
    </S.Button>
  );
};

export default Button;

const S = {
  Button: styled.button`
    padding: 1.3rem;
    border: none;
    border-radius: 50%;
    background-color: #007be9;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
