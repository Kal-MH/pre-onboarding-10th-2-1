import styled from 'styled-components';
import { ReactComponent as ClearIcon } from '../../assets/clear.svg';
import IconContainer from '../common/IconContainer';
import { useClickAwayContext } from '../../contexts/ClickAwayContext';
import { useSearchKeywordContext } from '../../contexts/SearchKeywordContext';

interface Props {
  placeholder: string;
}

const Input = ({ placeholder }: Props) => {
  const { show, handleShow } = useClickAwayContext();
  const { keyword, handleKeywordChange, handleKeywordClear } = useSearchKeywordContext();

  const IconConfig = {
    width: '21px',
    height: '21px',
    position: 'absolute',
    top: '23px',
    right: '10px',
    color: '#CACBCF',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    handleKeywordChange(value);
  };

  return (
    <S.InputContainer>
      <S.Input
        type="text"
        placeholder={placeholder}
        onFocus={(e) => {
          e.stopPropagation();
          handleShow(true);
        }}
        value={keyword}
        onChange={handleInputChange}
      />
      {show && (
        <div onClick={handleKeywordClear}>
          <IconContainer {...IconConfig}>
            <ClearIcon />
          </IconContainer>
        </div>
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
    font-weight: 400;
    line-height: 1.6;
    outline: none;
    padding: 20px 35px 20px 24px;
  `,
};
