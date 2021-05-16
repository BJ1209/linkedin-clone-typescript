import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { State } from '../state';

const Login: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: State) => state.auth.user);

  useEffect(() => {
    user && history.replace('/');
  }, [user, history]);

  const loginHandler = async () => {
    try {
      const user = await auth.signInWithPopup(GoogleProvider);
      const profile = {
        displayName: user.user?.displayName,
        email: user.user?.email,
        uid: user.user?.uid,
        photoURL: user.user?.photoURL,
      };
      sessionStorage.setItem('lc-user-profile', JSON.stringify(profile));
      dispatch(login(profile));
    } catch (error) {
      alert(error.message);
    }
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
