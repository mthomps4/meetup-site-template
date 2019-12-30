import { meetupById } from '@data';

export default (req, res) => {
  const {
    query: { id },
  } = req;

  const meetup = meetupById(id);

  res.status(200).json({ meetup });
};
