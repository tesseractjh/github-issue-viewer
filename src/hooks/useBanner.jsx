import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flex()}
  margin: 40px 0;
`;

function Banner({ imgSrc, href }) {
  return (
    <Wrapper>
      <a href={href}>
        <img src={imgSrc} alt="광고 배너" />
      </a>
    </Wrapper>
  );
}

Banner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

function useBanner({ order, imgSrc, href }) {
  return list => {
    const bannerInsertedList = [...list];
    bannerInsertedList.splice(order - 1, 0, <Banner key="banner" imgSrc={imgSrc} href={href} />);
    return bannerInsertedList;
  };
}

export default useBanner;
