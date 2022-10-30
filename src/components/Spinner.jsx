import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 200px;
`;

const SpinnerWrapper = styled.div`
  ${({ theme }) => theme.placeholder.absoluteCenter};
  width: 100px;
  height: 100px;
`;

const spinnerAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const SpinnerQuarter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  border: 10px solid;
  border-color: ${({ theme }) => theme.color.ACCENT} transparent transparent transparent;
  border-radius: 50%;
  animation: ${spinnerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  animation-delay: ${({ delay }) => delay ?? 0}s;
`;

function Spinner() {
  return (
    <Container>
      <SpinnerWrapper>
        <SpinnerQuarter delay={-0.4} />
        <SpinnerQuarter delay={-0.3} />
        <SpinnerQuarter delay={-0.2} />
        <SpinnerQuarter delay={-0.1} />
        <SpinnerQuarter />
      </SpinnerWrapper>
    </Container>
  );
}

export default Spinner;
