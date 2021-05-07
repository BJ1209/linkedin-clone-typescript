import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import {
  Container,
  DownArrow,
  Form,
  Input,
  Left,
  LinkedInLogo,
  ListItem,
  NavBar,
  NavItem,
} from '../styles/Header.style';
import { ReactComponent as HomeIcon } from '../assets/logo/nav-home.svg';
import { ReactComponent as NetworkIcon } from '../assets/logo/nav-network.svg';
import { ReactComponent as JobsIcon } from '../assets/logo/nav-jobs.svg';
import { ReactComponent as MessageIcon } from '../assets/logo/nav-messaging.svg';
import { ReactComponent as NotificationIcon } from '../assets/logo/nav-notifications.svg';
import { ReactComponent as WorkIcon } from '../assets/logo/nav-work.svg';
import Avatar from './Avatar';

const NavData = [
  { title: 'Home', Icon: HomeIcon, to: '/home' },
  { title: 'My Networks', Icon: NetworkIcon, to: '' },
  { title: 'Jobs', Icon: JobsIcon, to: '' },
  { title: 'Messaging', Icon: MessageIcon, to: '' },
  { title: 'Notifications', Icon: NotificationIcon, to: '' },
];

const Header: FC = () => {
  const [input, setInput] = useState<string>('');

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value);

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Left>
        <LinkedInLogo />
        <Form onSubmit={submitHandler}>
          <Input value={input} onChange={changeHandler} placeholder="Search" />
        </Form>
      </Left>
      <NavBar>
        {NavData.map(({ to, title, Icon }) => (
          <NavItem to={to} key={title}>
            <Icon />
            <span>{title}</span>
          </NavItem>
        ))}
        <ListItem>
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5603AQEyv-4vAmS4jg/profile-displayphoto-shrink_100_100/0/1614940231293?e=1625702400&v=beta&t=BziNPlRaH_eVWoCPozz0yGJFadTmMXaXcVdjjNY9ifg"
            style={{ height: 28, width: 28 }}
          />
          <div>
            Me
            <DownArrow />
          </div>
        </ListItem>
        <ListItem>
          <WorkIcon />
          <div>
            Work
            <DownArrow />
          </div>
        </ListItem>
      </NavBar>
    </Container>
  );
};

export default Header;
