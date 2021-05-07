import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HomeLogo } from '../assets/logo/home-logo.svg';

export const Img = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;
export const Container = styled.div`
  padding: 0.35em 13em;
  display: flex;
  align-items: center;
  background: #fff;
`;
export const Left = styled.div`
  flex-basis: 30%;
  display: flex;
  align-items: center;
`;
export const LinkedInLogo = styled(HomeLogo)`
  margin-right: 0.5em;
  object-fit: contain;
  height: 2.5em;
  width: 2.5em;
`;
export const Form = styled.form`
  width: 100%;
`;
export const Input = styled.input`
  padding: 0.5em 1em;
  background: #eef3f8;
  border: none;
  outline: none;
  font-size: 1rem;

  border-radius: 3px;
  width: 75%;
  transition: all 0.25s ease-in;
  &:focus-within {
    width: 100%;
  }
`;
export const NavBar = styled.nav`
  flex-basis: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * + * {
    margin-left: 2em;
  }
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    font-size: 0.75rem;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
  }
`;

export const DownArrow = styled.span`
  width: 0px;
  height: 0px;
  border-top: 6px solid black;
  border-bottom: 6px solid transparent;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
`;
