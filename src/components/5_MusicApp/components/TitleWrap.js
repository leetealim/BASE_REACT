import styled from "styled-components";

const StitleWrap = styled.div`
  text-align: center;

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  P {
    font-size: 14px;
    font-weight: 100;
    opacity: 0.7;
  }
`;

export const TitleWrap = () => {
  return (
    <StitleWrap>
      <h3>Blue bird</h3>
      <p>Pick Dreams</p>
    </StitleWrap>
  );
};
