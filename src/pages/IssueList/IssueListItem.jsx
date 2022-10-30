import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const Container = styled.li`
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.color.BLACK};
    margin-bottom: 10px;

    & > a {
      margin-bottom: 10px;
    }
  }
`;

const ItemWrapper = styled(Link)`
  display: inline-flex;
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY};
  }

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    font-size: 12px;
  }
`;

const ResponsiveSpan = styled.span`
  @media ${({ theme }) => theme.media.mobile} {
    display: inline-block;
    width: 100%;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 18px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const IssueNumber = styled.span`
  margin-right: 16px;
  color: ${({ theme }) => theme.color.ACCENT};

  @media ${({ theme }) => theme.media.mobile} {
    margin-right: 10px;
  }
`;

const Right = styled.div`
  width: 100px;
  margin-left: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 80px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    margin: 10px 0 0 0;
  }
`;

function IssueListItem({ issue }) {
  const { number, title, comments, user, created_at: createdAt } = issue;
  return (
    <Container>
      <ItemWrapper to={`./${number}`}>
        <Left>
          <Title>
            <IssueNumber>{`#${number}`}</IssueNumber>
            {title}
          </Title>
          <ResponsiveSpan>{`작성자: ${user.login}`}</ResponsiveSpan>
          <ResponsiveSpan>{`작성일: ${formatDate(createdAt)}`}</ResponsiveSpan>
        </Left>
        <Right>{`코멘트: ${comments}`}</Right>
      </ItemWrapper>
    </Container>
  );
}

IssueListItem.propTypes = {
  issue: PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
    }).isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default IssueListItem;
