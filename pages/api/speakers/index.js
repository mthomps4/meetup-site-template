import { getSpeakers } from '../../../data/helpers';

export default (_req, res) => {
  const speakers = getSpeakers();
  res.status(200).json({ speakers });
};
