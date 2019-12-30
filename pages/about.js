import { Flex, Image } from '@chakra-ui/core';
import { DualBlock } from '@components';
import { MainLayout } from '@layouts';

const ImageContainer = () => {
  return (
    <Flex my={{ base: '2rem' }} justifyContent="center">
      <Image
        size={{ base: '80%' }}
        objectFit="cover"
        src="http://lorempixel.com/600/600"
        fallbackSrc="https://via.placeholder.com/600"
        alt="ABOUT IMAGE"
      />
    </Flex>
  );
};

const About = () => {
  return (
    <Flex flexDirection={{ base: 'column' }} my="2rem">
      <h1>About</h1>
      <p>TODO...</p>
    </Flex>
  );
};

const AboutPage = () => {
  return (
    <MainLayout>
      <DualBlock first={<ImageContainer />} second={<About />} />
    </MainLayout>
  );
};

export default AboutPage;
