import styled from 'styled-components';
import { ReactComponent as IdentityBg } from '../../assets/logo/card-bg.svg';
import { ReactComponent as SaveIcon } from '../../assets/logo/save.svg';
import { ReactComponent as PlusIcon } from '../../assets/logo/plus-icon.svg';

export const Container = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 0.5em;
  }
`;

export const Connections = styled.div<{ item?: boolean }>`
  padding: 1em;
  display: flex;
  flex-direction: ${({ item }) => (item ? 'row' : 'column')};
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
  & > div > p {
    color: rgba(0, 0, 0, 0.55);
    margin-bottom: 0.25em;
  }
  & > p {
    font-weight: 600;
  }
`;

export const Card = styled.div<{ link?: boolean }>`
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  padding: 0em;
  }

  /* p tag in Connection component having link prop */
  & > ${Connections} > p {
    text-align: ${({ link }) => (link ? 'center' : 'left')};
    color: ${({ link }) => (link ? 'rgba(0,0,0,0.55)' : 'inherit')};
  }
`;

export const Identity = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h3 {
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    margin: 3.5em 0 1em;
    font-weight: 600;
  }
`;

export const Bg = styled(IdentityBg)`
  object-fit: contain;
  width: 100%;
  height: 3.5em;
`;

export const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  width: 100%;
`;

export const Save = styled(SaveIcon)`
  fill: rgba(0, 0, 0, 0.55);
  margin-right: 1em;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    & > a {
      text-decoration: none;
      color: #2977c9;
      font-size: 0.85rem;
      margin: 0.2em 0;
      padding: 0.2em 1em;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  & > span {
    margin-left: 3em;
    cursor: pointer;
    height: 30px;
    width: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transition: all 0.1s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
`;
export const Plus = styled(PlusIcon)`
  fill: rgba(0, 0, 0, 0.55);
`;
