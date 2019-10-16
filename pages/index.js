import styled from 'styled-components';
import Button from '../components/button';
import Main from '../layouts/main';

const StyledButton = styled(Button)`
  /* Adapt the colors based on primary prop */
  background-color: green;
  color: white;
  font-weight: bold;
  border-color: green;
  font-size: 1em;
  padding: 1em;
  border-radius: 0px;
`;

const handlePrimaryClick = e => {
  e.preventDefault();
  console.log('PRIMARY BUTTON CLICK');
};

const handleNormalClick = e => {
  e.preventDefault();
  console.log('PRIMARY BUTTON CLICK');
};

const Home = () => (
  <Main>
    <Button primary handleOnClick={e => handlePrimaryClick(e)}>
      Primary Button
    </Button>

    <Button handleOnClick={e => handleNormalClick(e)}>Normal Button</Button>

    <StyledButton>Extended Button</StyledButton>

    <div className="hero">
      <h1 className="title">Welcome to JsLou!</h1>
      <p className="description">
        Louisville Kentucky's Meetup for all things JavaScript.
      </p>

      <div className="row">
        <a href="/speakers" className="card">
          <h3>Speakers &rarr;</h3>
          <p>Meet our past speakers! Looking to give a talk?</p>
        </a>
        <a href="/meetups" className="card">
          <h3>Meetups</h3>
          <p>Looking for an old talk? Want to see what's coming up?</p>
        </a>
        <a href="/about" className="card">
          <h3>About JsLou</h3>
          <p>Learn more about JsLou and what we aim to do.</p>
        </a>
      </div>
    </div>

    {/* TODO: CHANGE TO STYLED COMPONENTS */}
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </Main>
);

export default Home;
