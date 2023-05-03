import styled from 'styled-components';
import SearchForm from './components/Form/SearchForm';
import SearchPreview from './components/Preview/SearchPreview';

function App() {
  //TODO: api호출 처리 및 contextAPI initialization
  return (
    <S.Container>
      <S.Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </S.Title>
      <S.FormContainer>
        <SearchForm />
        <SearchPreview />
      </S.FormContainer>
    </S.Container>
  );
}

export default App;

const S = {
  Container: styled.div`
    max-width: 58rem;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #d0e8fd;
  `,
  FormContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.h1`
    font-size: 3.25rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 2rem;
    letter-spacing: -0.018rem;
  `,
};
