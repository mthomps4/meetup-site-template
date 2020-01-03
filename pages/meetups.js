import { Box, Avatar, Grid, Flex, Spinner, Text } from '@chakra-ui/core';
import { DualBlock } from '@components';
import { MainLayout } from '@layouts';
import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

const MeetupTitle = ({ title }) => {
  return (
    <Text color="gray.900" fontWeight="bold">
      {title}
    </Text>
  );
};

const DescriptionBlock = () => {
  return (
    <Flex flexDirection={{ base: 'column' }} my="2rem">
      <h1>Meetups</h1>
      <p>Previous meetups of 2019 to now.</p>
    </Flex>
  );
};

const MeetupCard = ({ meetup }) => (
  <Flex
    w="100%"
    h="auto"
    bg="gray.50"
    color="gray.900"
    flexDirection="column"
    borderRadius="20px"
    p={3}>
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderBottomColor="g.700"
      borderBottomWidth="1px"
      mb={4}>
      <Avatar
        // Name = Falback with Initials
        name={meetup.speaker.fullName}
        //size="2xl"
        w="180px"
        h="180px"
        src="https://i.pravatar.cc/300"
      />
      <Text>
        <Text fontWeight="bold">Speaker: </Text>
        {meetup.speaker.fullName}
      </Text>
    </Flex>
    <MeetupTitle title={meetup.title} />
    <Text>{meetup.description}</Text>
    <Text fontWeight="bold" my={2}>
      Links:{' '}
    </Text>
    {meetup.links.map(link => (
      <Text>{link}</Text>
    ))}
    <Text fontWeight="bold" mt={3}>
      Location:{' '}
    </Text>
    <Text>{meetup.location.fullAddress}</Text>
    <Flex my={2} justifyContent="space-around">
      <Text>{meetup.speaker.twitter}</Text>
      <Text>{meetup.speaker.github}</Text>
    </Flex>
  </Flex>
);

const Meetups = ({ meetups }) => {
  return meetups ? (
    <Grid
      m={{ base: 1, sm: 1, md: 3, lg: 4 }}
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(2, 1fr)',
      }}
      w="100%"
      gap={5}>
      {meetups.map(m => (
        <MeetupCard key={m.title} meetup={m} />
      ))}
    </Grid>
  ) : (
    <Text>No meetups found...</Text>
  );
};

const MeetupsPage = () => {
  const [meetups, setMeetups] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchMeetupData = async () => {
      fetch('/api/meetups')
        .then(res => res.json())
        .then(({ meetups }) => {
          setMeetups(meetups);
          setLoading(false);
        })
        .catch(e => {
          console.error(e);
          setMeetups([]);
          setLoading(false);
        });
    };

    fetchMeetupData();
  }, []);

  if (isLoading) {
    return (
      <MainLayout>
        <Flex
          h="400px"
          w="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column">
          <Spinner size="xl" color="red.500" />
          <Text mt="2rem" color="gray.400">
            Loading Meetups...
          </Text>
        </Flex>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Box maxW={{ base: '80%' }} m="0 auto">
        <DescriptionBlock />
        <Meetups meetups={meetups} />
      </Box>
    </MainLayout>
  );
};

export default MeetupsPage;
