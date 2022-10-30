import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import URL from '../constants/url';
import Link from './Anchor';

const Container = styled.header`
  ${({ theme }) => theme.mixin.flex()}
  margin-bottom: 40px;
  font-size: 28px;
  color: ${({ theme }) => theme.color.ACCENT};
`;

const Repo = styled.h2`
  font-weight: 600;
  &::before {
    content: '/';
    margin: 0 10px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.BLACK};
  }
`;

function Header() {
  const { organization, repo } = useParams();
  return (
    <Container>
      <h1>
        <Link href={`${URL.GITHUB}/${organization}`}>{organization}</Link>
      </h1>
      {repo ? (
        <Repo>
          <Link href={`${URL.GITHUB}/${organization}/${repo}`}>{repo}</Link>
        </Repo>
      ) : null}
    </Container>
  );
}

export default Header;
