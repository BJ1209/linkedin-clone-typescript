import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import {
  Container,
  Form,
  Input,
  Left,
  LinkedInLogo,
  NavBar,
  NavbarRight,
  NavItem,
  SearchComp,
  SearchIcon,
  SignOut,
  Span,
} from '../styles/Header.style';
import { ReactComponent as HomeIcon } from '../assets/logo/nav-home.svg';
import { ReactComponent as NetworkIcon } from '../assets/logo/nav-network.svg';
import { ReactComponent as JobsIcon } from '../assets/logo/nav-jobs.svg';
import { ReactComponent as MessageIcon } from '../assets/logo/nav-messaging.svg';
import { ReactComponent as NotificationIcon } from '../assets/logo/nav-notifications.svg';
import { ReactComponent as WorkIcon } from '../assets/logo/nav-work.svg';
import { ReactComponent as DownIcon } from '../assets/logo/down-icon.svg';
import { ReactComponent as CrossIcon } from '../assets/logo/close.svg';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { auth } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { logout } from '../state/action-creators/auth.action';

const NavData = [
  { title: 'Home', Icon: HomeIcon, to: '#' },
  { title: 'My Network', Icon: NetworkIcon, to: '#' },
  { title: 'Jobs', Icon: JobsIcon, to: '#' },
  { title: 'Messaging', Icon: MessageIcon, to: '#' },
  { title: 'Notifications', Icon: NotificationIcon, to: '#' },
];

const Header: FC = () => {
  const [input, setInput] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e): void => setInput(e.target.value);

  const submitHandler: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
  };

  const logoutHandler = (): void => {
    auth
      .signOut()
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
    sessionStorage.clear();
    dispatch(logout());
  };

  return (
    <Container>
      <Left style={{ flexBasis: show ? '100%' : '' }}>
        <Link to="/">
          <LinkedInLogo />
        </Link>
        <Form onSubmit={submitHandler} style={{ display: show ? 'flex' : '' }}>
          <SearchIcon absolute />
          <Input
            value={input}
            onChange={changeHandler}
            placeholder="Search"
            style={{ width: show ? '100%' : '' }}
          />
        </Form>
        {!show ? (
          <SearchComp onClick={() => setShow(true)}>
            <SearchIcon />
            <Span>Search</Span>
          </SearchComp>
        ) : (
          <SearchComp onClick={() => setShow(false)}>
            <CrossIcon style={{ height: '1.2em', width: '1.2em' }} />
          </SearchComp>
        )}
      </Left>
      <NavBar style={{ display: show ? 'none' : 'flex' }}>
        {NavData.map(({ to, title, Icon }) => (
          <NavItem to={to} key={title}>
            <Icon />
            <Span>{title}</Span>
          </NavItem>
        ))}
        <NavbarRight>
          <NavItem to="" user>
            <Avatar
              src="https://media-exp1.licdn.com/dms/image/C5603AQEyv-4vAmS4jg/profile-displayphoto-shrink_100_100/0/1614940231293?e=1625702400&v=beta&t=BziNPlRaH_eVWoCPozz0yGJFadTmMXaXcVdjjNY9ifg"
              style={{ height: 28, width: 28 }}
            />
            <div>
              <Span>Me</Span>
              <DownIcon />
            </div>
            <SignOut onClick={logoutHandler}>sign-out</SignOut>
          </NavItem>
          <NavItem to="">
            <WorkIcon />
            <div>
              <Span>Work</Span>
              <DownIcon />
            </div>
          </NavItem>
          <NavItem to="">
            <p>Try Premium Free for 1 Month</p>{' '}
          </NavItem>
        </NavbarRight>
      </NavBar>
    </Container>
  );
};

export default Header;
