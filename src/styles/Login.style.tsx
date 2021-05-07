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
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const StyledNavLink = styled(Link)<StyledNavLinkProps>`
  font-weight: 600;
  text-decoration: none;
  padding: ${({ logo }) => (!logo ? '0.5em 1.5em 0.7em' : '0em')};
  outline: ${({ signIn }) => (signIn ? '1px solid #2977c9' : '')};
  color: ${({ join }) => (join ? 'gray' : '#2977c9')};
  border-radius: ${({ signIn }) => (signIn ? '28px' : '5px')};
  transition: all 0.25s ease-in;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: ${({ logo }) => (!logo ? '0.3em 1em 0.5em' : '0em')};
  }

  &:hover {
    background: ${({ signIn, logo }) =>
      signIn ? 'rgba(112,181,249,0.15)' : !logo ? 'rgb(225,225,225)' : 'transparent'};
    outline-width: 2px;
    outline-offset: -2px;
    color: ${({ join }) => (join ? 'black' : '')};
  }
`;

export const StyledLogo = styled(Logo)`
  object-fit: contain;
  height: 2.1em;
  @media (max-width: 1200px) {
    height: 2em;
  }
  @media (max-width: 992px) {
    height: 1.8em;
  }
  @media (max-width: 600px) {
    height: 1.5em;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  & > * + * {
    margin-left: 1em;
    @media (max-width: 600px) {
      margin-left: 0.5em;
    }
  }
`;

export const LoginContainer = styled.div`
  margin-top: 2em;
  flex: 1;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LoginContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12em;
  flex-basis: 50%;
  @media (max-width: 1200px) {
    padding-left: 3em;
  }
  @media (max-width: 992px) {
    flex-basis: 75%;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    padding: 0 6em;
    align-items: center;
  }
`;

export const LoginHero = styled(Hero)`
  flex-basis: 50%;
  object-fit: contain;
  height: 35em;
  width: 35em;
  z-index: -1;
  margin-right: 4em;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 2em;
    height: 30em;
    width: 30em;
  }
  @media (max-width: 600px) {
    height: 20em;
    width: 20em;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  color: #2977c9;
  line-height: 130%;
  letter-spacing: 1px;
  @media (max-width: 992px) {
    font-size: 3em;
  }
  @media (max-width: 768px) {
    padding: 0 1em;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Button = styled.button`
  margin-top: 10em;
  padding: 1em 6em;
  display: flex;
  align-items: center;
  outline: 1px solid black;
  border: none;
  background: transparent;
  border-radius: 28px;
  cursor: pointer;
  width: fit-content;
  transition: all 0.25s ease-in;

  @media (max-width: 992px) {
    padding: 1em 4em;
  }
  @media (max-width: 768px) {
    margin-top: 2em;
  }
  @media (max-width: 600px) {
    padding: 1em 2em;
  }

  &:hover {
    outline-width: 3px;
    outline-offset: -3px;
    background: rgb(245, 245, 245);
  }
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
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
