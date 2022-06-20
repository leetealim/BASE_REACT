import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SBottomPlay = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  margin-top: 25px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  color: gray;
`;
const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 10px;
`;
const NexBtn = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: #1d1d1d;
`;

export const BottomPlay = () => {
  return (
    <SBottomPlay>
      <Profile>
        <Avatar />
        <h3>haha</h3>
      </Profile>
      <NexBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NexBtn>
    </SBottomPlay>
  );
};
