import styled from 'styled-components';

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${({ theme, primary }) =>
    primary ? theme.button.colors.primary : theme.button.colors.white};
  color: ${({ theme, primary }) =>
    primary ? theme.button.colors.white : theme.button.colors.primary};

  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 3em;
`;

const Button = props => {
  const { primary, handleOnClick, children } = props;
  return (
    <StyledButton onClick={handleOnClick} primary={primary}>
      {children}
    </StyledButton>
  );
};

export default Button;
