import { FC } from 'react';
import {
  Button,
  Container,
  LoginContainer,
  LoginContainerLeft,
  LoginHero,
  Nav,
  NavList,
  Span,
  StyledGoogleLogo,
  StyledLogo,
  StyledNavLink,
  Title,
} from '../styles/Login.style';

const Login: FC = () => {
  return (
    <Container>
      <Nav>
        <StyledNavLink logo to="/">
          <StyledLogo />
        </StyledNavLink>
        <NavList>
          <StyledNavLink join to="">
            Join now
          </StyledNavLink>
          <StyledNavLink signIn to="">
            Sign in
          </StyledNavLink>
        </NavList>
      </Nav>
      <LoginContainer>
        <LoginContainerLeft>
          <Title>Welcome to your professional community</Title>
          <Button>
            <StyledGoogleLogo />
            <Span>Sign in with Google </Span>
          </Button>
        </LoginContainerLeft>
        <LoginHero />
      </LoginContainer>
    </Container>
  );
};

export default Login;
