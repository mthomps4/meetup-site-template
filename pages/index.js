import { Flex, Image } from '@chakra-ui/core';
import { DualBlock, NextMeetupDetails } from '@components';
import { MainLayout } from '@layouts';

const LogoContainer = () => {
  return (
    <Flex my={{ base: 5 }} justifyContent="center">
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

const HomePage = () => {
  return (
    <MainLayout>
      <DualBlock first={<LogoContainer />} second={<NextMeetupDetails />} />
    </MainLayout>
  )
};

export default HomePage;
