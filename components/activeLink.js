import { withRouter } from 'next/router';
import styled from 'styled-components';

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const LinkMeta = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActiveLink = ({ children, router, href }) => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: router.pathname === href ? 'red' : 'black',
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <LinkMeta href={href} onClick={handleClick} style={style}>
      {children}
    </LinkMeta>
  );
};

export default withRouter(ActiveLink);
