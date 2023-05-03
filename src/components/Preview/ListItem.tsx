import styled from 'styled-components';
import { ReactComponent as MagnifyingGlassIcon } from '../../assets/magnifying-glass.svg';
import IconContainer from '../common/IconContainer';

interface Props {
  value: string;
  cName?: string;
}

const ListItem = ({ value, cName }: Props) => {
  return (
    <S.ListItem className={cName}>
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

    &.active {
      background-color: rgba(204, 205, 208, 0.4);
    }
  `,
};
