import { Flex, Spinner, Text } from '@chakra-ui/core';
import { DualBlock } from '@components';
import { MainLayout } from '@layouts';
import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

const DescriptionBlock = () => {
  return (
    <Flex flexDirection={{ base: 'column' }} my="2rem">
      <h1>Meetups</h1>
      <p>Previous list of meetups coming soon...</p>
    </Flex>
  );
};

const MeetupCard = ({ meetup }) => {
  <Flex w="100%" h="500px" bg="blue.300">
    <Avatar></Avatar>
  </Flex>;
};

const Meetups = ({ meetups }) => {
  return meetups ? (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
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
      <DualBlock
        first={<DescriptionBlock />}
        second={<Meetups meetups={meetups} />}
      />
    </MainLayout>
  );
};

export default MeetupsPage;
