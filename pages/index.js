import { DualBlock } from '@components';
import { Image, Flex } from '@chakra-ui/core';
import { MainLayout } from '@layouts';

const LogoContainer = () => {
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

const MeetupDetails = () => {
  return <p>Next Meetup Details</p>;
};

const HomePage = () => (
  <MainLayout>
    <DualBlock first={<LogoContainer />} second={<MeetupDetails />} />
  </MainLayout>
);

export default HomePage;
