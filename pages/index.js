import { DualBlock } from '@components';
import { MainLayout } from '@layouts';

const JsLou = () => {
  return <p>JsLou Logo</p>;
};

const MeetupDetails = () => {
  return <p>Next Meetup Details</p>;
};

const HomePage = () => (
  <MainLayout>
    <DualBlock first={<JsLou />} second={<MeetupDetails />} />
  </MainLayout>
);

export default HomePage;
