import styled from 'styled-components';
import ListItem from './ListItem';

const SearchPreview = () => {
  const useInput = 'a';
  const data = ['a', 'b', 'c'];

  return (
    <S.UnorderedList>
      <ListItem value={useInput} />
      {data.map((d, i) => (
        <ListItem key={i} value={d} />
      ))}
    </S.UnorderedList>
  );
};

export default SearchPreview;

const S = {
  UnorderedList: styled.ul`
    max-width: 49rem;
    width: 100%;
    border-radius: 2rem;
    border: none;
    border-color: #ffffff;
    background-color: #ffffff;
    padding: 20px 10px;
  `,
};
