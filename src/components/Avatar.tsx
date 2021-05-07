import { FC } from 'react';
import { Img } from '../styles/Header.style';

interface AvatarProps {
  src: string;
  style?: object;
}

const Avatar: FC<AvatarProps> = (props) => {
  return <Img src={props.src} style={{ ...props.style }} />;
};

export default Avatar;
