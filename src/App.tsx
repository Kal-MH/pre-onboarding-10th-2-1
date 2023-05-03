import React from 'react';
import styled from 'styled-components';

function App() {
  return <S.TestDiv>Hello world</S.TestDiv>;
}

export default App;

const S = {
  TestDiv: styled.div`
    background-color: red;
  `,
};
