import { Avatar, Flex, Link, Spinner, Text } from '@chakra-ui/core';
import fetch from 'isomorphic-unfetch';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';

const NextMeetupCard = ({ meetup }) => {
  const { startDateTime, timezone, title, links, description, speaker, location } = meetup;
  const formattedStartTime = moment(startDateTime).tz(timezone).format("dddd MMM Do, ha z");
  return (
    <Flex w="100%" justifyContent="center">
      <Flex
        w="90%"
        h="auto"
        bg="gray.100"
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
          <Text fontSize="lg" fontWeight="bold">{title}</Text>
          <Text fontSize="lg" fontWeight="bold">{formattedStartTime}</Text>
          <Avatar
            // Name = Falback with Initials
            name={speaker.fullName}
            w="180px"
            h="180px"
            my={3}
            src="https://i.pravatar.cc/300"
          />
          <Flex>
            <Text fontWeight="bold">Speaker: </Text>
            <Text pl={2}>{speaker.fullName}</Text>
          </Flex>
          <Flex w="100%" my={2} justifyContent="space-around">
            <Text>{speaker.twitter}</Text>
            <Text>{speaker.github}</Text>
          </Flex>
        </Flex>
        <Text fontWeight="bold" mt={3}>
          Location:{' '}
        </Text>
        <Link color="teal.500" isExternal href={location.addressLink}>{location.fullAddress}</Link>
        <Text fontWeight="bold" mt={3}>
          Description:{' '}
        </Text>
        <Text>{description}</Text>
        <Text fontWeight="bold" my={2}>
          Links:{' '}
        </Text>
        {links.map((link, index) => (
          <Text key={index}>{link}</Text>
        ))}
      </Flex>
    </Flex >
  );
}

const NextMeetupDetails = () => {
  const [nextMeetup, setNextMeetups] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchMeetupData = async () => {
      fetch('/api/meetups/next')
        .then(res => res.json())
        .then(({ meetup }) => {
          setNextMeetups(meetup);
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
      <Flex
        h="400px"
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column">
        <Spinner size="xl" color="red.500" />
        <Text mt="2rem" color="gray.400">
          Loading Meetup...
        </Text>
      </Flex>
    );
  }

  if (!nextMeetup) { return <p>No Meetup Scheduled</p> };
  return <NextMeetupCard meetup={nextMeetup} />;
};

export default NextMeetupDetails;