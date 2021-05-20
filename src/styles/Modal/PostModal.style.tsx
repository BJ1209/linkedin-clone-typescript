import styled from 'styled-components';
import { ReactComponent as PhotIcon } from '../../assets/logo/photo.svg';
import { ReactComponent as VideoIcon } from '../../assets/logo/video-icon.svg';

const Form = styled.form`
  flex: 1;
  padding: 1em 1.5em;
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  h3 {
    margin-left: 1em;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const TextArea = styled.textarea`
  flex: 1;
  outline: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  resize: none;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    & > * + * {
      margin-left: 0.5em;
    }
  }
`;

const FileInput = styled.input`
  display: none;
`;
const Photo = styled(PhotIcon)`
  fill: rgba(0, 0, 0, 0.7);
`;
const Video = styled(VideoIcon)`
  fill: rgba(0, 0, 0, 0.7);
`;

const MediaBtn = styled.span`
  width: 2.75em;
  height: 2.75em;
  display: grid;
  place-items: center;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  transition: all 200ms ease-in;
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
    ${Photo} {
      fill: rgb(112, 181, 249);
    }
    ${Video} {
      fill: rgb(127, 193, 94);
    }
  }
`;

const Btn = styled.button`
  padding: 0.5em 1em;
  border-radius: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: #fff;
  background-color: #2977c9;
  transition: all 0.15s ease-in;
  &:hover {
    background-color: rgb(9, 98, 187);
  }
  &:disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.1);
    cursor: not-allowed;
  }
`;

export { Form, UserInfo, TextArea, Footer, MediaBtn, FileInput, Photo, Video, Btn };
