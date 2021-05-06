import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo/login-logo.svg';
import { ReactComponent as GoogleLogo } from '../assets/logo/google.svg';
import { ReactComponent as Hero } from '../assets/logo/login-hero-2.svg';

interface StyledNavLinkProps {
  logo?: boolean;
  join?: boolean;
  signIn?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  margin: 0 auto;
  padding: 1em 0;
  width: 1150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavLink = styled(Link)<StyledNavLinkProps>`
  font-weight: 600;
  padding: ${({ logo }) => (!logo ? '0.5em 1.5em 0.7em' : '0em')};
  outline: ${({ signIn }) => (signIn ? '1px solid #2977c9' : '')};
  text-decoration: none;
  color: ${({ join }) => (join ? 'gray' : '#2977c9')};
  border-radius: ${({ signIn }) => (signIn ? '28px' : '5px')};
  transition: all 0.25s ease-in;

  &:hover {
    background: ${({ signIn }) => (signIn ? 'rgba(112,181,249,0.15)' : 'rgb(225,225,225)')};
    outline-width: 2px;
    outline-offset: -2px;
    color: ${({ join }) => (join ? 'black' : '')};
  }
`;

export const StyledLogo = styled(Logo)`
  object-fit: contain;
  height: 2.1em;
`;

export const NavList = styled.ul`
  list-style: none;
  & > * + * {
    margin-left: 1em;
  }
`;

export const LoginContainer = styled.div`
  margin-top: 2em;
  flex: 1;
  display: flex;
`;

export const LoginContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12em;
  flex-basis: 55%;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  color: #2977c9;
`;

export const Button = styled.button`
  padding: 1em 6em;
  display: flex;
  align-items: center;
  outline: 1px solid black;
  border: none;
  background: none;
  border-radius: 28px;
  cursor: pointer;
  width: fit-content;
`;

export const StyledGoogleLogo = styled(GoogleLogo)`
  object-fit: contain;
  height: 2em;
  margin-right: 2em;
`;

export const Span = styled.span`
  padding-bottom: 0.2em;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  color: gray;
`;

export const LoginHero = styled(Hero)`
  object-fit: contain;
  height: 100%;
  margin-right: 4em;
  flex-basis: 45%;
`;
