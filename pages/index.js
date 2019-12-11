// import styled from '@emotion/styled';
// import { Flex } from '@theme-ui/components';
import DualBlock from '../components/DualBlock';
import Main from '../layouts/main';

const JsLou = () => {
  return <p>JsLou Logo</p>;
};

const MeetupDetails = () => {
  return <p>Next Meetup Details</p>;
};

const HomePage = () => (
  <Main>
    <DualBlock first={<JsLou />} second={<MeetupDetails />} />
  </Main>
);

export default HomePage;
