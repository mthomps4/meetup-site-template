import { speakerById } from '../../../data/helpers';

export default (req, res) => {
  const {
    query: { id },
  } = req;

  const speaker = speakerById(id);

  res.status(200).json({ speaker });
};
