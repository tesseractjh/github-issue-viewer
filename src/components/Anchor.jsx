import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

function Link({ to, href, children }) {
  if (to) {
    return <RouterLink to={to}>{children}</RouterLink>;
  }
  return <StyledLink href={href}>{children}</StyledLink>;
}

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Link.defaultProps = {
  to: '',
  href: '',
};

export default Link;
