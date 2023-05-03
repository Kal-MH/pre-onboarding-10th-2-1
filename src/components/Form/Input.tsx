import styled from 'styled-components';
import { ReactComponent as ClearIcon } from '../../assets/magnifying-glass.svg';
import IconContainer from '../common/IconContainer';

const Input = () => {
  const IconConfig = {
    width: '21px',
    height: '21px',
    position: 'absolute',
    top: '23px',
    right: '10px',
  };

  return (
    <div style={{ display: 'flex', position: 'relative', width: '100%' }}>
      <S.Input type="text" placeholder="검색어를 입력해주세요." />
      <IconContainer {...IconConfig}>
        <ClearIcon />
      </IconContainer>
    </div>
  );
};

export default Input;

const S = {
  Input: styled.input`
    border-radius: 4.2rem;
    border: none;
    border-color: #ffffff;
    background-color: #ffffff;
    width: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    outline: none;
    padding: 20px 35px 20px 24px;
  `,
};
