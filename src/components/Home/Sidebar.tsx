import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../state';
import {
  Bg,
  Card,
  Connections,
  Container,
  Hr,
  Identity,
  Links,
  Plus,
  Save,
} from '../../styles/HomeStyles/Sidebar.style';
import Avatar from '../Avatar';

const Sidebar: FC = () => {
  const user = useSelector((state: State) => state.auth.user);

  return (
    <Container>
      <Card>
        <Identity>
          <Bg />
          <Avatar
            src={user?.photoURL!}
            style={{
              width: 70,
              height: 70,
              boxShadow: '0 0 0 2px #fff',
              position: 'absolute',
              top: '20px',
            }}
          />
          <h3>{user?.displayName}</h3>
        </Identity>
        <Hr />
        <Connections>
          <div>
            <p>Connections</p>
          </div>
          <p>Grow your network</p>
        </Connections>
        <Hr />
        <Connections item>
          <Save />
          <p>My Items</p>
        </Connections>
      </Card>
      <Card link>
        <Links>
          <div>
            <Link to="#">Groups</Link>
            <Link to="#">Events</Link>
            <Link to="#">Followed Hashtags</Link>
          </div>
          <span>
            <Plus />
          </span>
        </Links>
        <Connections>
          <p>Discover More</p>
        </Connections>
      </Card>
    </Container>
  );
};

export default Sidebar;
