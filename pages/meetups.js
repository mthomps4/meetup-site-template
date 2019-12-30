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

const Meetups = () => {
  return (
    <Flex flexDirection={{ base: 'column' }} my="2rem">
      <h1>Meetups</h1>
      <p>Previous list of meetups coming soon...</p>
    </Flex>
  );
};

const MeetupsPage = () => {
  return (
    <MainLayout>
      <DualBlock first={<ImageContainer />} second={<Meetups />} />
    </MainLayout>
  );
};

export default MeetupsPage;
