import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeLogo } from '../assets/logo/home-logo.svg';
import { ReactComponent as Search } from '../assets/logo/search-icon.svg';

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
  position: relative;
  @media (max-width: 1350px) {
    padding: 0.35em 2em;
  }
  @media (max-width: 1200px) {
    padding: 0.35em 0.5em;
  }
`;
export const Left = styled.div`
  flex-basis: 30%;
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    flex-basis: auto;
  }
`;

export const LinkedInLogo = styled(HomeLogo)`
  margin-right: 0.5em;
  object-fit: contain;
  height: 2.5em;
  width: 2.5em;
  @media (max-width: 1200px) {
    height: 2.1em;
    width: 2.1em;
  }
`;
export const Form = styled.form`
  width: 100%;
  position: relative;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const SearchIcon = styled(Search)<{ absolute?: boolean }>`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'static')};
  height: ${({ absolute }) => (absolute ? '1em' : '1.3em')};
  width: ${({ absolute }) => (absolute ? '1em' : '1.3em')};
  left: 8px;
  top: 10px;
`;
export const Input = styled.input`
  padding: 0.5em 1em 0.5em 2em;
  background: #eef3f8;
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 3px;
  width: 70%;
  transition: all 0.4s ease-in-out;
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

  @media (max-width: 992px) {
    flex: 1;
  }
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p,
  & > div {
    font-size: 0.75rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
  & > div > svg {
    padding-top: 0.2em;
  }
  & > p {
    width: 100px;
    text-align: center;
    color: brown;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SearchComp = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  margin-left: 0.5em;
  cursor: pointer;

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const Span = styled.span`
  font-size: 0.75rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
