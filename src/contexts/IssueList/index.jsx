import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useAxios from '../../hooks/useAxios';
import api from '../../api';

const IssueListContext = React.createContext();
const IssueListDispatchContext = React.createContext();

function IssueListProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [perPage, setPerPage] = useState(30);
  const [page, setPage] = useState(1);
  const [issueList, setIssueList] = useState([]);
  const getIssueList = useAxios(api.getIssueList);

  const initList = useCallback(
    async ({ organization, repo }) => {
      setIsFetching(true);
      await getIssueList([organization, repo, perPage, page], {
        onSuccess: data => {
          setIssueList(data);
          setIsFetching(false);
        },
      });
    },
    [getIssueList, perPage, page]
  );

  const getList = useCallback(
    async ({ organization, repo }) => {
      setIsFetching(true);
      await getIssueList([organization, repo, perPage, page + 1], {
        onSuccess: data => {
          setPage(prev => prev + 1);
          setIssueList(prev => [...prev, ...data]);
          setIsFetching(false);
        },
      });
    },
    [getIssueList, perPage, page]
  );

  const changePerPage = useCallback(newPerPage => {
    setPerPage(newPerPage);
  }, []);

  const value = useMemo(
    () => ({
      isFetching,
      perPage,
      page,
      issueList,
    }),
    [isFetching, perPage, page, issueList]
  );

  const dispatch = useMemo(
    () => ({
      initList,
      getList,
      setPerPage: changePerPage,
    }),
    [initList, getList, changePerPage]
  );

  return (
    <IssueListContext.Provider value={value}>
      <IssueListDispatchContext.Provider value={dispatch}>{children}</IssueListDispatchContext.Provider>
    </IssueListContext.Provider>
  );
}

IssueListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { IssueListContext, IssueListDispatchContext, IssueListProvider };
