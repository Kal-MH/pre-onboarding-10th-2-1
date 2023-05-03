import { createContext, useState, useContext } from 'react';

interface Props {
  children: JSX.Element;
}

interface State {
  keyword: string;
  handleKeywordChange: (value: string) => void;
  handleKeywordClear: () => void;
}

const initialState = {
  keyword: '',
  handleKeywordChange: () => {
    return;
  },
  handleKeywordClear: () => {
    return;
  },
};

const SearchKeywordContext = createContext<State>(initialState);

export const useSearchKeywordContext = () => useContext(SearchKeywordContext);

const SearchKeywordProvider = ({ children }: Props) => {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = (value: string) => {
    if (value.length === 0) {
      setKeyword('');
    } else {
      setKeyword(value);
    }
  };

  const handleKeywordClear = () => {
    setKeyword('');
  };

  return (
    <SearchKeywordContext.Provider value={{ keyword, handleKeywordChange, handleKeywordClear }}>
      {children}
    </SearchKeywordContext.Provider>
  );
};

export default SearchKeywordProvider;
