import styledComponents from "styled-components";
import styled from "styled-components";

const SPlayWrap = styled.div`
  margin-top: 30px;
  margin-top: 30px;
`;
const GageWrap = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
`;
const Gage = styled.div`
  width: 10%;
  height: 100%;
  background-color: mediumpurple;
`;
const spen = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 100;
`;

export const PlayWrap = () => {
  return (
    <SPlayWrap>
      <GageWrap>
        <Gage />
      </GageWrap>
      <Timewrap>
        <spen>00:03</spen>
        <spen>03:40</spen>
      </Timewrap>
    </SPlayWrap>
  );
};
