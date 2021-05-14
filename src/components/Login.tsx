import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { auth, GoogleProvider } from '../config/firebase';
import { login } from '../state/action-creators/auth.action';
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
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = async () => {
    try {
      const user = await auth.signInWithPopup(GoogleProvider);
      const profile = {
        displayName: user.user?.displayName,
        email: user.user?.email,
        uid: user.user?.uid,
        photoURL: user.user?.photoURL,
      };
      dispatch(login(profile));
    } catch (error) {
      alert(error.message);
    }
    history.push('/home');
  };

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
          <Button onClick={loginHandler}>
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
