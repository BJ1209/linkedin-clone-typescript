import { FC } from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <Container>
      <Card>
        <Identity>
          <Bg />
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5603AQGMgLni0Z8rQg/profile-displayphoto-shrink_100_100/0/1620544555804?e=1626307200&v=beta&t=nEtprJ8rJQUfSuVXaRoM29tf6t0ajZH2_J63WnJ9x7o"
            style={{
              width: 70,
              height: 70,
              boxShadow: '0 0 0 2px #fff',
              position: 'absolute',
              top: '20px',
            }}
          />
          <h3>Bikram Jeet Singh</h3>
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
