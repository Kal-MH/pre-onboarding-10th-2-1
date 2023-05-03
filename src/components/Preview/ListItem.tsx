import styled from 'styled-components';
import { ReactComponent as MagnifyingGlassIcon } from '../../assets/magnifying-glass.svg';
import IconContainer from '../common/IconContainer';

interface Props {
  value: string;
}

const ListItem = ({ value }: Props) => {
  return (
    <S.ListItem>
      <IconContainer width="15px" height="15px">
        <MagnifyingGlassIcon />
      </IconContainer>
      <span>{value}</span>
    </S.ListItem>
  );
};

export default ListItem;

const S = {
  ListItem: styled.li`
    padding: 10px 10px;
    font-size: 1.8rem;
    display: flex;
    gap: 1rem;
  `,
};
