import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const SearchForm = () => {
  return (
    <S.Form>
      <Input />
      <Button />
    </S.Form>
  );
};

export default SearchForm;

const S = {
  Form: styled.form`
    max-width: 49rem;
    width: 100%;
    margin: 0 auto 1rem;
    border-radius: 4.2rem;
    border: 2px solid;
    border-color: #ffffff;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding-right: 1rem;
  `,
};
