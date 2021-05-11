import { FC } from 'react';
import styled from 'styled-components';
interface AvatarProps {
  src: string;
  style?: object;
}

export const Img = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar: FC<AvatarProps> = (props) => {
  return <Img src={props.src} style={{ ...props.style }} />;
};

export default Avatar;
