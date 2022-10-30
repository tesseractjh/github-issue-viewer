import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IssueListProvider } from './contexts/IssueList';
import IssueList from './pages/IssueList';
import Layout from './components/Layout';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <IssueListProvider>
          <Routes>
            <Route index element={<div>홈</div>} />
            <Route path="/:organization" element={<Layout />}>
              <Route index element={<div>단체</div>} />
              <Route path="/:organization/:repo" element={<IssueList />} />
              <Route path="/:organization/:repo/:issue" element={<div>이슈</div>} />
            </Route>
          </Routes>
        </IssueListProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
