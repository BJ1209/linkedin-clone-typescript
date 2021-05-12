import { PostBtn } from '../../styles/HomeStyles/Main.style';
import {
  Comment,
  Like,
  More,
  PostBottom,
  PostContainer,
  PostDescription,
  PostImage,
  PostTop,
} from '../../styles/HomeStyles/Post.style';
import Avatar from '../Avatar';

const Post = () => {
  return (
    <PostContainer>
      <PostTop>
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C5603AQGMgLni0Z8rQg/profile-displayphoto-shrink_100_100/0/1620544555804?e=1626307200&v=beta&t=nEtprJ8rJQUfSuVXaRoM29tf6t0ajZH2_J63WnJ9x7o"
          style={{ height: 50, width: 50 }}
          alt="User picture"
          draggable={false}
        />
        <div>
          <h4>Guru Nanak Dev Enginnering College,Bidars</h4>
          <p>org</p>
          <p>2 days ago</p>
        </div>
        <span>
          <More />
        </span>
      </PostTop>
      <PostDescription>
        Dear Alumni/students/parents
        <br />
        <br />
        With the current situation of coronavirus pandemic, GNDEC Team dropped in a personal note to
        enquire about your well being . Hope you & your family are doing well and taking all the
        necessary safety precautions to fight against the virus.
        <br />
        <br />
        You are an integral part of GNDEC Bidar fraternity, Lets show unity and fight against virus
        by following safety procedures at all times.
        <br />
        <br />
        Please get vaccinated and be safe. "Life imposes things on you that you can’t control, but
        you still have the choice of how you’re going to live through this." — Celine Dion
        <br />
        <br />
        Stay Home & stay safe.
        <br />
        <br /> Regards, Management, Principal & Staff of GNDEC Bidar
      </PostDescription>
      <PostImage
        src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="post"
      />
      <PostBottom>
        <p>3</p>
        <div>
          <PostBtn>
            <Like />
            <span>Link</span>
          </PostBtn>
          <PostBtn>
            <Comment />
            <span>Comment</span>
          </PostBtn>
        </div>
      </PostBottom>
    </PostContainer>
  );
};

export default Post;
