import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const PLACEHOLDER_TEXT = '검색어를 입력해주세요.';

const SearchForm = () => {
  return (
    <S.Form>
      <Input placeholder={PLACEHOLDER_TEXT} />
      <Button />
    </S.Form>
  );
};

export default SearchForm;

const S = {
  Form: styled.form`
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 4.2rem;
    border: 2px solid;
    border-color: #ffffff;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding-right: 1rem;
  `,
};
