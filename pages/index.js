import { DualBlock } from '@components';
import { MainLayout } from '@layouts';

const Logo = () => {
  return <p>Logo</p>;
};

const MeetupDetails = () => {
  return <p>Next Meetup Details</p>;
};

const HomePage = () => (
  <MainLayout>
    <DualBlock first={<Logo />} second={<MeetupDetails />} />
  </MainLayout>
);

export default HomePage;
