import { createContext, useState, useContext } from 'react';

interface Props {
  children: JSX.Element;
}

interface State {
  show: boolean;
  handleShow: (nextShow: boolean) => void;
}

const initialState = {
  show: false,
  handleShow: () => {
    return;
  },
};

const ClickAwayContext = createContext<State>(initialState);

export const useClickAwayContext = () => useContext(ClickAwayContext);

const ClickAwayProvider = ({ children }: Props) => {
  const [show, setShow] = useState(false);

  const handleShow = (nextShow: boolean) => {
    setShow(nextShow);
  };

  return (
    <ClickAwayContext.Provider value={{ show, handleShow }}>{children}</ClickAwayContext.Provider>
  );
};

export default ClickAwayProvider;
