import styled from 'styled-components';
import ListItem from './ListItem';
import { useState, useEffect, useCallback } from 'react';
import { ClinicName } from '../../types/clinicName';

interface Props {
  keyword: string;
  data: ClinicName[];
}

const CLASSNAME_LIST_ITEM_ACTIVE = 'active';

const SearchPreview = ({ keyword, data }: Props) => {
  const [cursor, setCursor] = useState(-1);

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
    [setCursor, data]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <S.UnorderedList>
      <ListItem value={keyword} />
      {data && data.length !== 0 && (
        <>
          <S.List>추천 검색어</S.List>
          {data.map((d, i) => (
            <ListItem
              key={d.id}
              value={d.name}
              cName={`${i === Number(cursor) ? `${CLASSNAME_LIST_ITEM_ACTIVE}` : ''}`}
            />
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
