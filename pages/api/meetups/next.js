import { getMeetups } from '@data';

export default (_req, res) => {
  const meetups = getMeetups();
  res.status(200).json({ meetup: meetups[0] });
};
