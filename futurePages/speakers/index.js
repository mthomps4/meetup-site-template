import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Main from '../../layouts/main';

const SpeakerCard = styled.div`
  background: #ccc;
  border-radius: 4em;
  height: 200px;
  width: 200px;
`;

const Speakers = () => {
  const [speakers, setSpeakers] = useState(null);

  useEffect(() => {
    async function getSpeakers() {
      const res = await fetch('/api/speakers');
      const { speakers } = await res.json();
      setSpeakers(speakers);
    }

    getSpeakers();
  }, []);

  return (
    <Main>
      <h1>Speakers</h1>
      {speakers &&
        speakers.map(speaker => (
          <div key={speaker.id}>
            <Link href={`/speakers/${speaker.id}`}>
              <SpeakerCard>
                <p>
                  <strong>First Name:</strong>
                  {speaker.firstName}
                </p>
              </SpeakerCard>
            </Link>
          </div>
        ))}
    </Main>
  );
};

export default Speakers;
