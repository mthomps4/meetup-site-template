import styled from '@emotion/styled';
import DualBlock from '../components/DualBlock';
import Main from '../layouts/main';

const Image = styled.image`
  width: 100px;
  height: 100px;
`;

const ImageContainer = () => {
  return <Image src="#" alt="ABOUT IMAGE" />;
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>TODO...</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <Main>
      <DualBlock first={<ImageContainer />} second={<About />} />
    </Main>
  );
};

export default AboutPage;
