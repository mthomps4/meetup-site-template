import meetups from './meetups';

const data = {
  meetups,
};

const readOnlyData = Object.freeze(data);

export const meetupById = id =>
  readOnlyData.meetups.find(meetup => meetup.id == id);
export const getMeetups = () => readOnlyData.meetups;

export default readOnlyData;
