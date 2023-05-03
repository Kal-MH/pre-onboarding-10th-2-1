import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ClearIcon } from '../../assets/clear.svg';
import IconContainer from '../common/IconContainer';
import { useClickAwayContext } from '../../contexts/ClickAwayContext';

interface Props {
  placeholder: string;
}

const Input = ({ placeholder }: Props) => {
  const { show, handleShow } = useClickAwayContext();

  const IconConfig = {
    width: '21px',
    height: '21px',
    position: 'absolute',
    top: '23px',
    right: '10px',
  };

  return (
    <S.InputContainer>
      <S.Input
        type="text"
        placeholder={placeholder}
        onFocus={(e) => {
          e.stopPropagation();
          console.log('input');
          handleShow(true);
        }}
      />
      {show && (
        <IconContainer {...IconConfig}>
          <ClearIcon />
        </IconContainer>
      )}
    </S.InputContainer>
  );
};

export default Input;

const S = {
  InputContainer: styled.div`
    display: flex;
    position: relative;
    width: 100%;
    z-index: 10;
  `,
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
