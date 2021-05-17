import { FC } from 'react';
import styled from 'styled-components';
interface AvatarProps {
  src: string | undefined;
  style?: object;
  alt?: string;
  draggable?: boolean;
}

export const Img = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar: FC<AvatarProps> = (props) => {
  return (
    <Img src={props.src} alt={props.alt} draggable={props.draggable} style={{ ...props.style }} />
  );
};

export default Avatar;
