import styled from '@emotion/styled';
import DualBlock from '../components/DualBlock';
import Main from '../layouts/main';

const Image = styled.image`
  width: 100px;
  height: 100px;
`;

const ImageContent = () => {
  return <Image src="#" alt="MEETUPS IMAGE" />;
};

const Meetups = () => {
  return (
    <div>
      <h1>Meetups</h1>
      <p>TODO...</p>
    </div>
  );
};

const MeetupsPage = () => {
  return (
    <Main>
      <DualBlock first={<ImageContent />} second={<Meetups />} />
    </Main>
  );
};

export default MeetupsPage;
