import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  padding: 40px 24px;
`;

const Section = styled.section`
  max-width: 1080px;
  margin: 0 auto;
`;

function Layout() {
  return (
    <Container>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </Container>
  );
}
export default Layout;
