import styled from 'styled-components';
import ListItem from './ListItem';
import { useState, useEffect, useCallback } from 'react';

const SearchPreview = () => {
  const [cursor, setCursor] = useState(-1);

  const useInput = 'a';
  const data: Array<string> = ['a', 'b', 'c'];

  const handleKeyPress = useCallback(
    (e: any) => {
      const { key } = e;

      if (!data || !data.length) return;

      if (key === 'ArrowDown') {
        setCursor((prev) => (prev < data.length - 1 ? prev + 1 : prev));
      } else if (key === 'ArrowUp') {
        setCursor((prev) => (prev > 0 ? prev - 1 : prev));
      }
    },
    [setCursor]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <S.UnorderedList>
      <ListItem value={useInput} />
      {data && data.length !== 0 && (
        <>
          <S.List>추천 검색어</S.List>
          {data.map((d, i) => (
            <ListItem key={i} value={d} cName={`${i === Number(cursor) ? 'active' : ''}`} />
          ))}
        </>
      )}
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
  List: styled.li`
    padding: 10px 10px;
  `,
};
