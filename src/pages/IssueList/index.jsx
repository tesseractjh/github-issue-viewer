import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/Spinner';
import { IssueListContext, IssueListDispatchContext } from '../../contexts/IssueList';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import IssueListItem from './IssueListItem';

const Container = styled.ul`
  position: relative;
  min-height: 400px;
`;

const Target = styled.div`
  width: 100%;
  height: 300px;
`;

function IssueList() {
  const { organization, repo } = useParams();
  const { isLoading, isFetching, isLastPage, issueList } = useContext(IssueListContext);
  const { initList, getList } = useContext(IssueListDispatchContext);

  const setTarget = useIntersectionObserver(() => getList({ organization, repo }));

  useEffect(() => {
    initList({ organization, repo });
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  return (
    <Container>
      {issueList.map(issue => (
        <IssueListItem key={issue.id} issue={issue} />
      ))}
      {isFetching || isLastPage ? null : <Target ref={setTarget} />}
      {isFetching ? <Spinner /> : null}
    </Container>
  );
}

export default IssueList;
